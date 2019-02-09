const { resolve } = require('path')
const {
  HotModuleReplacementPlugin,
} = require('webpack')
const merge = require('webpack-merge')

const { config } = require('./common')


const PORT = 3001

module.exports = merge(config, {
  mode: 'development',

  performance: {
    hints: false,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: resolve(__dirname, '..', 'webroot'),
    hot: true,
    noInfo: false,
    stats: {
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      moduleTrace: true,
      errorDetails: true,
    },
    host: 'localhost',
    historyApiFallback: true,
    port: PORT,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
  },
})
