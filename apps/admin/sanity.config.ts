import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { sanitySchemas } from './src/core/integrations/sanity/src/schemas/schema';
import deskStructure from './src/core/integrations/sanity/src/structure/deskStructure';

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
    // @ts-ignore
    types: sanitySchemas,
  },
});
