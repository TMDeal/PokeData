// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// styles
import './index.css';

// polyfills
import 'core-js/es6/map';
import 'core-js/es6/set';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const renderTarget = document.getElementById('root');

if(renderTarget != null) {
  ReactDOM.render(
    <Router>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <App/>
      </MuiThemeProvider>
    </Router>
    ,renderTarget);
  registerServiceWorker();
}
