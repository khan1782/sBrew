import React, { Component } from 'react';
import FeaturedEventsFeed from '../components/featuredEventsFeed'

class FeaturedFeeds extends Component {
	render(){
		return(
			<div className='featured-feed-container'>
					<FeaturedEventsFeed />
			</div>
		)
	}
}


console.log("featuredfeeds.js from containers")
export default FeaturedFeeds