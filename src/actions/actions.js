export function toggleVisibility(targetComponent){return {type:TOGGLE_VISIBILITY, component:targetComponent}}
export function sortEvents(category){ return {type: SORT_EVENTS, category}}
export function filterEvents(category){return {type: FILTER_EVENTS, category}}
export function sortLocations(category){return {type: SORT_LOCATIONS, category}}
export function filterLocations(category){return {type: FILTER_LOCATIONS, category}}

export const SORT_EVENTS = "SORT_EVENTS"
export const FILTER_EVENTS = "FILTER_EVENTS"
export const SORT_LOCATIONS = "SORT_LOCATIONS"
export const FILTER_LOCATIONS = "FILTER_LOCATIONS"
export const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY"


export const EventFilters = {	DATE:"DATE",TAG:"TAG"}
export const EventSorts = {DATE:"DATE",LOCATION:"LOCATION"}
export const LocationSorts = {LOCATION:"LOCATION"}
export const FilterSorts = {TAG:"TAG"}
export const VisibleComponents = {
	EVENT_MODAL:"EVENT_MODAL",
	EVENT_FEED:"EVENT_FEED",
	BREW_MODAL:"BREW_MODAL",
	BREW_FEED:"BREW_FEED",
	LOCATION_MODAL:"LOCATION_MODAL",
	LOCATION_FEED:"LOCATION_FEED"
}

export const EventTags={
	OTHER:"Other" ,
	BEER_PROMOTIONS:"Beer Promotions",
	SPORTS_AND_ACTIVITIES:"Sports & Activities",
	BEER_RELEASES:"Beer Releases",
	CHARITY_EVENTS:"Charity Events",
	FOOD_PAIRINGS:"Food Pairings",
	SPECIAL_CASKS:"Special Casks",
	BEER_FESTIVALS:"Beer Festivals",
	EDUCATION:"Education" ,
	SPECIAL_TAPS:"Special Taps"
}