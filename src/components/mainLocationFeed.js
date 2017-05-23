import React, { Component } from 'react';

class MainLocationFeed extends Component {
	render(){
		const { locations,toggleVisibility,visibility } = this.props
		var toggle="hidden"
		if(visibility.LOCATION_FEED) toggle="visible"
	
		return(		
			<div style={{visibility:toggle,position:"absolute"}}>
				<img 
					width="600px"
					height="440px"
					src="http://i.imgur.com/8cSg3Fi.png" />
				{locations.map((l,i)=>{
					return <LocationFeedComponent
						key={i}
						location={l} />
				})}
			</div>
		)
	}
}

class LocationFeedComponent extends Component {
	render(){
		const {location} = this.props
		return (
			<div>
				{location.name}:location.city--{location.street}
			</div>
		)
	}
}


console.log("mainLocationFeed from components")

export default MainLocationFeed