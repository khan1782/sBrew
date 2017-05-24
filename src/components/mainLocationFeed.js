import React, { Component } from 'react';

class MainLocationFeed extends Component {
	render(){
		const { toggleVisibility,locations,visibility, setModalID } = this.props
		var toggle="hidden"
		if(visibility.feeds.locationFeed) toggle="visible"
	
		return(		
			<div style={{visibility:toggle,position:"absolute"}}>
				<img 
					width="600px"
					height="440px"
					src="http://i.imgur.com/8cSg3Fi.png" />
				{locations.map((l,i)=>{
					return <LocationFeedComponent
						setModalID={setModalID}
						toggleVisibility={toggleVisibility}
						key={i}
						location={l}
						id={l.uuid} />
				})}
			</div>
		)
	}
}

class LocationFeedComponent extends Component {
	constructor(props){
		super(props)
		this.handleClick=this.handleClick.bind(this)
	}
	handleClick(){
		this.props.toggleVisibility("modals","locationModal")
		this.props.setModalID(this.props.id)
	}
	render(){
		const {location} = this.props
		return (
			<div
				onClick={this.handleClick}>
				{location.name}:location.city--{location.street}
			</div>
		)
	}
}


console.log("mainLocationFeed from components")

export default MainLocationFeed