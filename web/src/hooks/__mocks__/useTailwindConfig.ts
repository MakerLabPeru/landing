const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../../../tailwind.config');

const config = resolveConfig(tailwindConfig);

export default () => config;
