import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import postReducer from './reducers/postReducer';
import { createLogger } from 'redux-logger';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const logger = createLogger();

const store = createStore(postReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


