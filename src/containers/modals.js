import React, { Component } from 'react';
import EventModal from '../components/eventModal'

class Modals extends Component {

	generateEventInfo(){
		const {events, locations} = this.props.show
		let eventInfo = events.find((e)=>{ return e.id === this.props.visibility.modals.modalID })
		let locationInfo = locations.find((l)=> { return l.uuid === eventInfo.location_uuid })
		eventInfo.street=locationInfo.street
		eventInfo.name=locationInfo.name
		eventInfo.city=locationInfo.city
		return eventInfo
	}

	generateBrewInfo(){
		const {brews}=this.props.show
		let brewInfo = brews.find((b)=>{ return b.uuid === this.props.visibility.modals.modalID })
		return brewInfo
	}

	generateLocationInfo(){
		const {locations, events}=this.props.show
		let locationInfo=locations.find((l)=>{return l.uuid === this.props.visibility.modals.modalID})
		locationInfo.events=events.filter((e)=>{return e.location_uuid===locationInfo.uuid})
		return locationInfo
	}

	// componentDidUpdate(){
	// 		this.setState(currentModalInfo:this.generateEventInfo())
	// }

	render(){
		const {visibility,toggleVisibility} = this.props
		let modalComponent=null
		if(visibility.modals.eventModal)    { modalComponent=<EventModal    eventInfo     = {this.generateEventInfo()}    toggleVisibility={toggleVisibility} /> }
		if(visibility.modals.brewModal)     { modalComponent=<BrewModal     brewInfo      = {this.generateBrewInfo()}     toggleVisibility={toggleVisibility} /> }
		if(visibility.modals.locationModal) { modalComponent=<LocationModal locationInfo  = {this.generateLocationInfo()} toggleVisibility={toggleVisibility} /> }
		return(
			<div>
				{modalComponent}
			</div>
		)
	}
}


class BrewModal extends Component {
	constructor(props){
		super(props)
		this.handleClick=this.handleClick.bind(this)
	}
	handleClick(){
		this.props.toggleVisibility("modals","modalOff")
	}
	render(){
		const {brewInfo} = this.props
		return(
			<div 
				className="modal"
				onClick={this.handleClick}
				>
				<div className="modal-content">
				<p>{brewInfo.instagram}</p>
					<img
						style={{width:"200px", height:"200px"}}
						src={brewInfo.photo.url}
						alt="brewzzzz" />
					<div style={{display:"inline-block"}}>
						<p>{brewInfo.name}</p>
						 <a href={brewInfo.website}>Website</a>
	      		<a href={brewInfo.instagram}>Instagram</a>
	      		<a href={brewInfo.twitter}>Twitter</a>
	      		<a href={brewInfo.facebook}>Facebook</a>
	      	</div>
	      	</div>
			</div>
		)
	}
}

class LocationModal extends Component {
	constructor(props){
		super(props)
		this.handleClick=this.handleClick.bind(this)
	}
	handleClick(){
		this.props.toggleVisibility("modals","modalOff")
	}
	render(){
		const {locationInfo}=this.props
		return(
			<div 
				className="modal"
				onClick={this.handleClick}>
				<div className="modal-content">
					<header>{locationInfo.name} </header>
					<img src={locationInfo.photo} alt="brew" width="200px"/>
					<p>Address: {locationInfo.street}, {locationInfo.city}, {locationInfo.state}</p>
					<p>Phone: {locationInfo.phone}</p>
					<p>Brewery Info:</p>
					<ul>
						<li>Instagram:{locationInfo.instagram}</li>
						<li>facebook:{locationInfo.facebook}</li>
						<li>website:{locationInfo.website}</li>	
					</ul>
					<h2>Events for this Location</h2>
					{locationInfo.events.map((e,i)=>{
						
						return <LocationModalEventFeed key={i} event={e}/>
					})}
				</div>
			</div>
		)
	}
}


class LocationModalEventFeed extends Component {
	render(){
		const {event} = this.props

		return(
			<div>
				<header style={{width:"100%", borderTop:"solid rgba(232,232,232,0.8)"}}></header>
				<h2>{event.title}</h2>
				<img src={event.event_photos[0].url} alt="event" width="300px" />
				<p>Start Date: {event.start_date}</p>
				<p dangerouslySetInnerHTML={{__html: event.body}} />
			</div>
		)
	}
}



export default Modals

