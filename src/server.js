// @flow
import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

const port: string = process.env.PORT || '8080';
const host = 'localhost';
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

if(process.env.NODE_ENV != 'production') {
  let config = webpackConfig({
    env: {
      production: false
    }
  });

  let compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.listen('8080', () => {
  console.log(`listening on ${host}:${port}`);
});
