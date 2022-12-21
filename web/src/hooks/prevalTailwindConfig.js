/*  eslint-disable import/no-extraneous-dependencies */

// @preval
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../../tailwind.config');

module.exports = resolveConfig(tailwindConfig);
