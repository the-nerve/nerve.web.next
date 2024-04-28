import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';

import { sanitySchemas, singletonDocumentIDs, structure } from './src/integrations/sanity';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export default defineConfig({
  basePath: '/cms',
  name: 'default',
  title: 'nerve-next',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    media(),
    visionTool(),
  ],

  schema: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    types: sanitySchemas,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({ schemaType }) => !singletonDocumentIDs.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly include in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonDocumentIDs.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
