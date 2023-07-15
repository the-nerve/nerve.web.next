import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    // env: 'src/env/index.ts',
    // next: 'src/next/index.ts',
    node: 'src/node/index.ts',
    // react: 'src/react/index.ts',
    // utils: 'src/utils/index.ts',
  },
  external: ['react', 'react-dom'],
  format: ['cjs'],
  splitting: false,
  sourcemap: true,
  treeshake: true,
  clean: true,
  dts: true,
});
