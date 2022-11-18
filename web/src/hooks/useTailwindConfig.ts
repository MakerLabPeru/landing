import type {Config} from 'tailwindcss';

// eslint-disable-next-line
const config = preval`
  const resolveConfig = require('tailwindcss/resolveConfig');
  const tailwindConfig = require('../../tailwind.config');

  const config = resolveConfig(tailwindConfig);

  module.exports = resolveConfig(tailwindConfig);;
`;

export default () => config as Config;
