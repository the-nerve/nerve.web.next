import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { deskStructure, sanitySchemas, singletonDocumentIDs } from './src/core/integrations/sanity';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export default defineConfig({
  basePath: '/cms',
  name: 'default',
  title: 'nerve-next',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
  ],

  schema: {
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
