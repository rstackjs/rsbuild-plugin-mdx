// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';

define.lib({
  lib: [
    { syntax: 'es2021', dts: true },
    { format: 'cjs', syntax: 'es2021' },
  ],
  output: {
    target: 'node',
  },
});

define.test({
  env: {
    // Let Rsbuild choose the mode based on the command.
    NODE_ENV: undefined,
  },
  isolate: false,
});

define.fmt({
  singleQuote: true,
  sortPackageJson: true,
});

define.staged({
  '*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}': ['rs lint', 'rs fmt'],
  '*.{json,md,mdx,css,scss,less,html,yml,yaml}': 'rs fmt',
});

define.lint(({ globals, js, ts }) => [
  js.configs.recommended,
  ts.configs.recommended,
  {
    files: ['playground/src/**/*', 'test/**/src/**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    languageOptions: {
      globals: globals.rstest,
    },
  },
]);
