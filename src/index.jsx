import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/app';

const app = (
  <HashRouter>
    <App />
  </HashRouter>
);

render(app, document.getElementById('root'));
