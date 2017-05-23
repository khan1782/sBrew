export const toggleVisibility = (targetComponent) => { 
	return { type: 'TOGGLE_VISIBILITY', component: targetComponent }
}
export const setEvents = (ajaxResponse) => {
	return {type: 'SET_EVENTS', response:ajaxResponse}
}

export const setBrews = (ajaxResponse) => {
	return {type: 'SET_BREWS', response:ajaxResponse}
}

export const setLocations = (ajaxResponse) =>{
	return {type: 'SET_LOCATIONS', response:ajaxResponse}
}
