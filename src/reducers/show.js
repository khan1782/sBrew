const initialState={show:{events:[],brews:[],locations:[]},visibility:{EVENT_MODAL:false,EVENT_FEED:false,BREW_MODAL:false,BREW_FEED:false,LOCATION_MODAL:false,LOCATION_FEED:false}}
const show = (state=initialState.show, action) => { 
	return state 
}
console.log("show.js of reducers 1/3")
export default show
