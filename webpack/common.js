const { resolve } = require('path')
const {
  EnvironmentPlugin,
} = require('webpack')

const HtmlWebPackPlugin = require('html-webpack-plugin')


const DIST = resolve(__dirname, '..', 'dist')
const SRC = resolve(__dirname, '..', 'app')
const HTML = resolve(__dirname, '..', 'webroot/index.html')
const { NODE_ENV = 'development' } = process.env

const rules = require('./rules')


const config = {
  context: SRC,
  target: 'web',

  entry: {
    vendor: ['styled-components'],
    index: ['./core/index'],
  },
  output: {
    filename: '[name].js',
    path: DIST,
    pathinfo: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.mjs', '.js'],
    modules: [
      'node_modules',
      SRC,
    ],
  },
  module: {
    rules: [
      ...rules,
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: HTML,
    }),
    new EnvironmentPlugin({
      NODE_ENV,
    }),
  ],
  stats: {
    colors: true,
    children: false,
  },
}

module.exports = {
  config,
  DIST,
}
