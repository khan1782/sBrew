import { combineReducers } from 'redux'
import show from './show'
import visibility from './visibility'

const beerApp = combineReducers({
	visibility,
	show
})

export default beerApp