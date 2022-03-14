import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logActions, reportError } from './middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logActions, reportError)
)

const store = createStore(
  rootReducer,
  composedEnhancers
);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
