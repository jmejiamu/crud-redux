import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
// import postReducer from './reducers/postReducer';
import { createLogger } from 'redux-logger';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


