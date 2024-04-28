import { defineCliConfig } from 'sanity/cli';
import tsconfigPaths from 'vite-tsconfig-paths';

const getProjectID = () => {
  if (process.env.SANITY_STUDIO_PROJECT_ID) {
    return process.env.SANITY_STUDIO_PROJECT_ID;
  }

  throw new Error('SANITY_STUDIO_PROJECT_ID is not defined');
};

export default defineCliConfig({
  server: {
    port: 8888,
  },
  api: {
    projectId: getProjectID(),
    dataset: 'production',
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
