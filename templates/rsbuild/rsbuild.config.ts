import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  tools: {
    swc: {
      jsc: {
        transform: {
          react: {
            runtime: 'automatic',
            importSource: 'rubedo-dom',
          }
        }
      }
    }
  },
  html: {
    title: 'Rubedo + Rsbuild',
  },
});
