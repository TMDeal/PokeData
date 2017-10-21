// @flow
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from 'components/app';

const renderTarget = document.getElementById('app');

if(renderTarget != null) {
  render(
    <Router>
      <App/>
    </Router>,
    renderTarget
  );
}
