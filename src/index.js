import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
// import brewApp from './reducers/reducers'

import { Provider } from 'react-redux';
import { createStore } from 'redux';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
