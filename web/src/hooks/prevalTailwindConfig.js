/*  eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */

// @preval
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../../tailwind.config');

module.exports = resolveConfig(tailwindConfig);
