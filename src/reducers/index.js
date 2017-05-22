import { combineReducers } from 'redux'
import show from './show'
import visibility from './visibility'

const beerApp = combineReducers({
	visibility,
	show
})
console.log("index.js of reducer 1/3")
export default beerApp