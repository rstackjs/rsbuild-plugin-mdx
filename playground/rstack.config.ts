// Configuration guide: https://rstack.rs/config
import { pluginReact } from '@rsbuild/plugin-react';
import { define } from 'rstack';
import { pluginMdx } from '../src/index.ts';

define.app({
  plugins: [pluginReact(), pluginMdx()],
});
