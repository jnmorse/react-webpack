var config = require('./webpack.config')
var webpack = require('webpack')

config.entry.main.shift()
config.devtool = false
config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['exports', 'require']
      },
      compress: {
        warnings: false
      }
    })
)

require('dotenv').config()

module.exports = config
