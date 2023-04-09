import type { UserConfigExport } from 'vite';
import solid from 'vite-plugin-solid';
import type { UserConfigExport as VitestConfig } from 'vitest/config';


const config: UserConfigExport & VitestConfig = {
  plugins: [
    solid({
      ssr: true,
      solid: {
        hydratable: true,
      },
    }),
  ],
  test: {
    globals: false,
    environment: 'happy-dom',
    transformMode: {
      web: [/\.tsx?$/],
    },
    include: ['./tests/**/*.tests.{ts,tsx}'],
    setupFiles: ['./tests/vitest.setup.ts'],
    threads: true,
    isolate: false,
    deps: {
      registerNodeLoader: true,
      fallbackCJS: true,
    }
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
};


export default config;