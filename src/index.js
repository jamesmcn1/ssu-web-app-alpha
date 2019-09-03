import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import Root from './Root';

import './assets/stylesheets/main.scss';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
