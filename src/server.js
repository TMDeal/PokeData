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

if(process.env.NODE_ENV != 'production') {
  let config = webpackConfig({
    env: {
      production: false
    }
  });

  let compiler = webpack(config);
  let indexFile = path.resolve(__dirname + 'index.html');

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler));

  app.get('/*', (req: express$Request, res: express$Response, next: express$NextFunction): mixed => {
      compiler.outputFileSystem.readFile(indexFile, (err, result) => {
          if (err) {
              return next(err);
          }
          res.set('content-type', 'text/html');
          res.send(result);
          res.end();
      });
  });
}
else {
  app.use(express.static(path.join(__dirname, '../dist')));
}


app.listen('8080', () => {
  console.log(`listening on ${host}:${port}`);
});
