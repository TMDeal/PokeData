import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

const port = process.env.PORT || '8080';
const host = 'localhost';
const app = express();

if(process.env.NODE_ENV != 'production') {
  let compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, '../dist')));

app.listen('8080', () => {
  console.log(`listening on ${host}:${port}`);
});
