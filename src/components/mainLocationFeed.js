import React, { Component } from 'react';

class MainLocationFeed extends Component {
	render(){
		const { toggleVisibility,locations,visibility, setModalID } = this.props
		var toggle="hidden"
		if(visibility.feeds.locationFeed) toggle="visible"
	
		return(		
			<div style={{visibility:toggle,position:"absolute",backgroundColor:"rgb(242, 242, 242)"}}>
				<img 
					width="800px"
					
					alt="location"
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
		const style={
			width:"100%",
			height:"100px",
			boxShadow:"0 1px 20px -8px #636463",
			// margin:"20px",
			display:'inline-block',
			overflow:"hidden",
			backgroundColor:"white"
			// textAlign:"center"
		}		
		return (
			<div
				style={style}
				onClick={this.handleClick}>
				<img
					src={location.photo}
					alt="brew"
					height="100px" />
				<div style={{height:"100px",display:"inline-block",position:"relative"}}>
					<header>{location.name}</header>
					<p>{location.street},{location.city}</p>
					<p>{location.phone}</p>
					<p>{location.website}</p>
				</div>
			</div>
		)
	}
}




export default MainLocationFeed