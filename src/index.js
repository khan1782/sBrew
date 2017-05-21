import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
// import brewApp from './reducers/reducers'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {sortEvents,filterEvents,sortLocations,filterLocations,toggleVisibility} from './actions/actions`'
import {SORT_EVENTS,FILTER_EVENTS,SORT_LOCATIONS,FILTER_LOCATIONS,TOGGLE_VISIBILITY} from './actions/actions'
import {EventFilters,EventSorts,LocationSorts,FilterSorts,VisibleComponents} from './actions/actions'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


