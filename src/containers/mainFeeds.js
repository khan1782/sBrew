import React, { Component } from 'react';
import MainEventFeed from '../components/mainEventFeed'
import MainBrewFeed from '../components/mainBrewFeed'
import MainLocationFeed from '../components/mainLocationFeed'

class MainFeeds extends Component {
	render(){
		return(
			<div className='featured-feed-container'>
					<MainEventFeed />
					<MainBrewFeed />
					<MainLocationFeed />
			</div>
		)
	}
}


console.log("mainfeeds.js from containers")
export default MainFeeds