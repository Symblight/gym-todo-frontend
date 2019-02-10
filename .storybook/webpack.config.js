// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const { resolve } = require('path')
const SRC = resolve(__dirname, '..', 'app')

console.log(SRC, 11)

module.exports = {
  context: SRC,
  target: 'web',
  resolve: {
    extensions: ['.mjs', '.js'],
    modules: [
      'node_modules',
      SRC,
    ],
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
    ],
  },
};
