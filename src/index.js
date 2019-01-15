import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css'

import './style/reset.css'
import './flexible'

import Root from './route/Routes'

import * as serviceWorker from './serviceWorker';
import store from './Store'

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();