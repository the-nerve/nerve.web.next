import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';

import { schemaTypes, singletonDocumentIDs } from './src/schemaTypes';
import { structure } from './src/structure';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

const getProjectID = () => {
  if (process.env.SANITY_STUDIO_PROJECT_ID) {
    return process.env.SANITY_STUDIO_PROJECT_ID;
  }

  throw new Error('SANITY_STUDIO_PROJECT_ID is not defined');
};

export default defineConfig({
  name: 'default',
  title: 'nerve-next',

  projectId: getProjectID(),
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
    types: schemaTypes,
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
