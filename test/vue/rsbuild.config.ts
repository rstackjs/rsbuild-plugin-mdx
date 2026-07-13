import { defineConfig } from '@rsbuild/core';
import { pluginMdx } from '@rsbuild/plugin-mdx';
import { pluginVue } from '@rsbuild/plugin-vue';
import { getRandomPort } from '@rstackjs/test-utils';

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginMdx({
      mdxLoaderOptions: {
        jsxImportSource: 'vue',
      },
    }),
  ],
  server: {
    port: await getRandomPort(),
  },
});
