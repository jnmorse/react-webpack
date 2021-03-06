const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const InterpolateHTMLPlugin = require('interpolate-html-plugin');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

const config = require('../../package.json');
const common = require('./common');
const htmlWebpackPluginOptions = require('./html-webpack-plugin-options');

const url = new URL(config.homepage) || '';
console.log(url.pathname);

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: url ? url.pathname : '/'
  },

  module: {
    rules: [
      {
        test: /\.css$/u,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, '../../src')
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  // browed some things from create-react-app
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        cache: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
    }),
    new HtmlWebpackPlugin(htmlWebpackPluginOptions.prod),
    new InterpolateHTMLPlugin({
      PUBLIC_URL: url && url.pathname.length > 1 ? `${url.pathname}/` : ''
    }),
    new InjectManifest({
      swSrc: 'src/service-worker.js',
      importWorkboxFrom: 'cdn'
    })
  ]
});
