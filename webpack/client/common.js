const merge = require('webpack-merge')
const common = require('../common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js'
  },

  module: {
    rules: [

      {
        test: /.*\.gif|png|jpe?g|svg$/iu,
        exclude: /node_modules/u,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=images/[name].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, '
            + 'interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },

      /* eslint-disable prefer-named-capture-group */
      {
        test: /\.((woff2?|svg)(\?v=\d+\.\d+\.\d+))?$|(woff2?|svg|jpe?g|png|gif|ico)$/u,
        exclude: /src\/images/u,
        loader: 'url-loader?name=fonts/[name].[ext]&limit=10000'
      },

      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/u,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendors: {
          test: /node_modules/u,
          name: 'vendor'
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      title: 'React Webpack',
      template: './src/index.html',
      favicon: './src/assets/images/icon.png'
    })
  ]
})
