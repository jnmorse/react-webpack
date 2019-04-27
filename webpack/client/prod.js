const { join } = require('path')
const merge = require('webpack-merge')
const StatsWebpackPlugin = require('stats-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const common = require('./common')

module.exports = merge(common, {
  mode: 'production',
  entry: join(__dirname, '../../src/client/index'),
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()]
  },
  plugins: [
    new StatsWebpackPlugin('stats.json')
  ]
})
