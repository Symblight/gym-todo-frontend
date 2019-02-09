const {
    EnvironmentPlugin,
  } = require('webpack');
const { NODE_ENV = 'development' } = process.env;

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = [
    new HtmlWebPackPlugin({
        title: 'GYM',
        template: 'index.html',
      }),
      new EnvironmentPlugin({
        NODE_ENV,
      }),
];