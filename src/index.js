import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

const myStore = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={myStore}>
  <App /> </Provider>,
  document.getElementById('root')
);

