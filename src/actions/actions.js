export const SHOW_BREWS_ALL = "SHOW_BREWS_ALL"
export const SHOW_BREW_SQUARE = "SHOW_BREW_SQUARE"
export const SHOW_BREW_MODAL = "SHOW_BREW_MODAL"
export const SHOW_EVENTS_ALL = "SHOW_EVENTS_ALL"
export const SHOW_EVENT_SQUARE = "SHOW_EVENT_SQUARE"
export const SHOW_EVENT_MODAL = "SHOW_EVENT_MODAL"
export const SORT_EVENTS = "SORT_EVENTS"
export const FILTER_EVENTS = "FILTER_EVENTS"
export const SORT_LOCATIONS = "SORT_LOCATIONS"
export const FILTER_LOCATIONS = "FILTER_LOCATIONS"

export function sortEvents(category){ return {type: SORT_EVENTS, category}}
export function filterEvents(category){return {type: FILTER_EVENTS, category}}
export function sortLocations(category){return {type: SORT_LOCATIONS, category}}
export function filterLocations(category){return {type: FILTER_LOCATIONS, category}}
export function showBrewsAll(){return {type: SHOW_BREWS_ALL}}
export function showBrewModal(uuid){return {type: SHOW_BREW_MODAL, uuid}}
export function showBrewSquare(uuid){return {type: SHOW_BREW_SQUARE, uuid}}
export function showEventsAll(){return {type: SHOW_EVENTS_ALL}}
export function showEventSquare(id){return {type: SHOW_EVENT_SQUARE, id}}
export function showEventModal(id){return {type:SHOW_EVENT_MODAL}}


export const TOGGLE_EVENTS_FEED_VISIBILITY = "TOGGLE_EVENTS_FEED_VISIBILITY"
export const TOGGLE_EVENT_MODAL_VISIBILITY = "TOGGLE_EVENT_MODAL_VISIBILITY"
export const TOGGLE_BREWS_FEED_VISIBILITY = "TOGGLE_BREWS_FEED_VISIBILITY"
export const TOGGLE_BREW_MODAL_VISIBILITY = "TOGGLE_BREW_MODAL_VISIBILITY"
export const TOGGLE_LOCATIONS_FEED_VISIBILITY = "TOGGLE_LOCATIONS_FEED_VISIBILITY"
export const TOGGLE_LOCATIONS_MODAL_VISIBILITY = "TOGGLE_LOCATIONS_MODAL_VISIBILITY"

export function toggleEventsFeedVisibility(){return {type:TOGGLE_EVENTS_FEED_VISIBILITY}}
export function toggleEventModalVisibility(){return {type:TOGGLE_EVENT_MODAL_VISIBILITY}}
export function toggleBrewsFeedVisibility(){return {type:TOGGLE_BREWS_FEED_VISIBILITY}}
export function toggleBrewModalVisibility(){return{type:TOGGLE_BREW_MODAL_VISIBILITY}}
export function toggleLocationFeedVisibility(){return {type:TOGGLE_LOCATIONS_FEED_VISIBILITY}}
export function toggleLocationModalVisibility(){return {type:TOGGLE_LOCATIONS_MODAL_VISIBILITY}}


export const EventFilters = {
	DATE:"DATE",
	TAG:"TAG"
}
export const EventSorts = {
	DATE:"DATE",
	LOCATION:"LOCATION"
}
export const LocationSorts = {
	LOCATION:"LOCATION"
}
export const FilterSorts = {
	TAG:"TAG"
}
