import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
  basePath: '/cms',
  name: 'default',
  title: 'nerve-next',

  projectId: '54gr84ev',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
