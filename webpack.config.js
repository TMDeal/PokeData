const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackHotMiddleware = require('webpack-hot-middleware');

const ROOT_DIR = path.resolve(__dirname);
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const SRC_DIR  = path.resolve(ROOT_DIR, 'src');
const APP_DIR  = path.resolve(SRC_DIR, 'app');

module.exports = env => {
  let config = {
    entry: {
      bundle: APP_DIR + '/index.jsx',
      vendor: APP_DIR + '/vendor.js'
    },

    output: {
      path: DIST_DIR,
      publicPath: '/',
      filename: '[name].js'
    },

    module: {
      rules: [
        {
          test: /\.jsx?/,
          include: APP_DIR,
          use: [
            { loader: 'babel-loader' }
          ]
        },
        {
          test: /\.scss$|.sass$/,
          include: path.resolve(APP_DIR, 'styles'),
          use: [
            { loader: 'sass-loader' }
          ]
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        components: path.resolve(APP_DIR, 'components')
      }
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'PokeData',
        template: path.resolve(ROOT_DIR, 'src', 'index.html')
      })
    ]
  };

  if(!env.production) {

    config = merge(config, {
      devtool: 'inline-source-map',
      entry: {
        bundle: [
          "webpack-hot-middleware/client"
        ],
        vendor: [
          "webpack-hot-middleware/client"
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': 'development'
          }}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]
    });
  }

  return config
};
