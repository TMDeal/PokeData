import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const ROOT_DIR = path.resolve(__dirname);
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const APP_DIR  = path.resolve(ROOT_DIR, 'src', 'app');

export default {
  entry: {
    app: APP_DIR + '/index.js'
  },

  output: {
    path: DIST_DIR,
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
