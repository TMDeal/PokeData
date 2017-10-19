import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

const renderTarget = document.getElementById('app');

render(
  <App/>,
  renderTarget
);