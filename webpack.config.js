import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import webpackHotMiddleware from 'webpack-hot-middleware';

const ROOT_DIR = path.resolve(__dirname);
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const APP_DIR  = path.resolve(ROOT_DIR, 'src/app');

let config = {
  entry: {
    bundle: [APP_DIR + '/index.jsx']
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

if(process.env.NODE_ENV != 'production') {

  config = merge(config, {
    devtool: 'inline-source-map',
    entry: {
      bundle: [
        "webpack-hot-middleware/client",
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  });
}

export default config;
