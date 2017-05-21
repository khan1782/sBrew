import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
// import brewApp from './reducers/reducers'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {SHOW_BREWS_ALL,SHOW_BREW_SQUARE,SHOW_BREW_MODAL,SHOW_EVENTS_ALL,SHOW_EVENT_SQUARE,SHOW_EVENT_MODAL,SORT_EVENTS,FILTER_EVENTS,SORT_LOCATIONS,FILTER_LOCATIONS} from './actions/actions'
import {sortEvents,filterEvents,sortLocations,filterLocations,showBrewsAll,showBrewModal,showBrewSquare,showEventsAll,showEventSquare,showEventModal,EventFilters,EventSorts,LocationSorts,FilterSorts} from './actions/actions'
import {TOGGLE_EVENTS_FEED_VISIBILITY,TOGGLE_EVENT_MODAL_VISIBILITY,TOGGLE_BREWS_FEED_VISIBILITY,TOGGLE_BREW_MODAL_VISIBILITY,TOGGLE_LOCATIONS_FEED_VISIBILITY,TOGGLE_LOCATIONS_MODAL_VISIBILITY} from './actions/actions'
import {toggleEventsFeedVisibility,toggleEventModalVisibility,toggleBrewsFeedVisibility,toggleBrewModalVisibility,toggleLocationFeedVisibility,toggleLocationModalVisibility} from './actions/actions'


console.log(sortEvents("ASD"))

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


