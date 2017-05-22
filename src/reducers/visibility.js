const initialState={show:{events:[],brews:[],locations:[]},visibility:{EVENT_MODAL:false,EVENT_FEED:false,BREW_MODAL:false,BREW_FEED:false,LOCATION_MODAL:false,LOCATION_FEED:false}}

const executeVisibilityToggle=(state,component)=>{
	let middleManObject = {}
	middleManObject[component]=!state[component]
	return Object.assign({},state,middleManObject)
}
const visibility = (state = initialState.visibility, action) => {
	if (action.type==='TOGGLE_VISIBILITY') return executeVisibilityToggle(state,action.component)
	return state
}


console.log("visibility.js of reducers 1/3")



export default visibility

