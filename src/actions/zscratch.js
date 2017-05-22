// function toggleVisibility(targetComponent){return {type:TOGGLE_VISIBILITY, component:targetComponent}}
// const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY"
// const VisibleComponents = {
// 	EVENT_MODAL:"EVENT_MODAL",
// 	EVENT_FEED:"EVENT_FEED",
// 	BREW_MODAL:"BREW_MODAL",
// 	BREW_FEED:"BREW_FEED",
// 	LOCATION_MODAL:"LOCATION_MODAL",
// 	LOCATION_FEED:"LOCATION_FEED"
// }

// // filter
// // 	filter events 
// // 		filter events by date, two dates given
// // 		filter events by tag
// // 	filter Locations 
// // 		filter locations by tag
// function filterFeed(feedType,filterType,tag=""){ 
// 	return {
// 		type:FILTER_FEED,
// 		feedType:feedType,
// 		filterType:filterType,
// 		tag:tag
// 	} 
// }
// const FILTER_FEED = "FILTER_FEED"

// const EventFilters = {	DATE:"start_date",TAG:"tag1"}
// const LocationFilters = {TAG:"location_tags"}
// const EventTags={
// 	OTHER:"Other" ,
// 	BEER_PROMOTIONS:"Beer Promotions",
// 	SPORTS_AND_ACTIVITIES:"Sports & Activities",
// 	BEER_RELEASES:"Beer Releases",
// 	CHARITY_EVENTS:"Charity Events",
// 	FOOD_PAIRINGS:"Food Pairings",
// 	SPECIAL_CASKS:"Special Casks",
// 	BEER_FESTIVALS:"Beer Festivals",
// 	EDUCATION:"Education" ,
// 	SPECIAL_TAPS:"Special Taps"
// }
// const LocationTags={
// 	FOOD_SERVICE:"Food Service",
// 	TWENTY_ONE_PLUS:"21+ Only",
// 	FOOD_TRUCKS:"Food Trucks",
// 	FAMILY_FRIENDLY:"Family Friendly",
// 	DOG_FRIENDLY:"Dog Friendly",
// 	GROWLER_FILLS:"Growler Fills"
// }
// const FeedType={ EVENT:"events", LOCATION:"locations"}



// const EventSorts = {DATE:"DATE",LOCATION:"LOCATION"}
// const LocationSorts = {LOCATION:"LOCATION"}


// // sort
// // 	sort events
// // 		sort events by location
// // 		sort events by date
// // 	sort locations
// // 		sort locations by location



// // function filterFeed(FeedComponentType,category){
// // 	return {type:FILTER_FEED, component:FeedComponentType, category:category}
// // }
// // const FILTER_FEED = "FILTER_FEED"
// // const SORT_FEED = "SORT_FEED"



// // function sortEvents(cat){ return {type: SORT_EVENTS, category:cat}}
// // function filterEvents(cat){return {type: FILTER_EVENTS, category:cat}}
// // function sortLocations(cat){return {type: SORT_LOCATIONS, category:cat}}
// // function filterLocations(cat){return {type: FILTER_LOCATIONS, category:cat}}
// // const SORT_EVENTS = "SORT_EVENTS"
// // const FILTER_EVENTS = "FILTER_EVENTS"
// // const SORT_LOCATIONS = "SORT_LOCATIONS"
// // const FILTER_LOCATIONS = "FILTER_LOCATIONS"








// // function filter(state=initialState,action){
// // 	switch(action.type){

// // 		case FILTER_FEED:
// // 			const { feedType, filterType, tag } = action
// // 			const filterCallbacks = { events:eventFilterCallback, locations:locationFilterCallback }
// // 			const eventFilterCallback = (item) => { item[filterType] === tag }
// // 			const locationFilterCallback = (item) => { item[filterType][tag] }
// // 			return state[feedType].filter(filterCallbacks[feedType])

// // 		default:
// // 			return state
// // 	}
// // }




// // function filterFeed(feedType,filterType,tag=""){ 
// // 	return {
// // 		type:FILTER_FEED,
// // 		feedType:feedType,
// // 		filterType:filterType,
// // 		tag:tag
// // 	} 
// // }

// // const LocationFilters = { TAG:"location_tags" }
// // const EventFilters = { DATE:"start_date", TAG:"tag1" }
// // const EventTags={
// // 	OTHER:"Other" ,
// // 	BEER_PROMOTIONS:"Beer Promotions",
// // 	SPORTS_AND_ACTIVITIES:"Sports & Activities",
// // 	BEER_RELEASES:"Beer Releases",
// // 	CHARITY_EVENTS:"Charity Events",
// // 	FOOD_PAIRINGS:"Food Pairings",
// // 	SPECIAL_CASKS:"Special Casks",
// // 	BEER_FESTIVALS:"Beer Festivals",
// // 	EDUCATION:"Education" ,
// // 	SPECIAL_TAPS:"Special Taps"
// // }
// // const LocationTags={
// // 	FOOD_SERVICE:"Food Service",
// // 	TWENTY_ONE_PLUS:"21+ Only",
// // 	FOOD_TRUCKS:"Food Trucks",
// // 	FAMILY_FRIENDLY:"Family Friendly",
// // 	DOG_FRIENDLY:"Dog Friendly",
// // 	GROWLER_FILLS:"Growler Fills"
// // }
