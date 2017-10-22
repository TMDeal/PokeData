// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
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
      <App/>
    </Router>
    ,renderTarget);
  registerServiceWorker();
}
