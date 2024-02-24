import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    devices: 'src/devices/index.ts',
    env: 'src/env/index.ts',
    next: 'src/next/index.ts',
    node: 'src/node/index.ts',
    react: 'src/react/index.ts',
    testing: 'src/testing/index.ts',
    utils: 'src/utils/index.ts',
  },
  external: ['vitest', 'react', 'react-dom'],
  format: ['cjs'],
  splitting: false,
  sourcemap: true,
  treeshake: true,
  clean: true,
  dts: true,
});
