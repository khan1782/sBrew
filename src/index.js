import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import beerApp from './reducers' 
import App from './App';

// import ReactDOM from 'react-dom';
console.log("index.js from src 1/1")

const store = createStore(beerApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)