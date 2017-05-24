import React, { Component } from 'react';

class EventModal extends Component{
	constructor(props){
		super(props)
		this.handleClick=this.handleClick.bind(this)
	}
	handleClick(){
		this.props.toggleVisibility("modals","modalOff")
	}



	render(){
		const { eventInfo,toggleVisibility } = this.props
	

		return(
			<div  
				className="modal" 
				onClick={this.handleClick} >
				<div className="modal-content">
					<div style={{display:"inline-block",width:"50%",top:"0"}}>
      			<p>{eventInfo.title}</p>	

	      		{eventInfo.event_photos.map((photo) => {
	      			return(
	      				<img 
	      					src={photo.url} 
	      					alt="event"
	      					key={photo.url}
	      					style={{width:"400px"}}/>
	      			)
	      		})}
	      	</div>
      		<div style={{display:"inline-block",width:"50%"}}>
	      		<p>{eventInfo.start_date}</p>
	      		<a href={eventInfo.ticket_url}>Buy Tickets</a>
	      		<p className="hover">Located at {eventInfo.locationName}</p>
	      		<p>{eventInfo.street}, {eventInfo.city} </p>
	      		<a href={eventInfo.website}>Website</a>
	      		<a href={eventInfo.instagram}>Instagram</a>
	      		<a href={eventInfo.twitter}>Twitter</a>
	      		<a href={eventInfo.facebook}>Facebook</a>
	      		<a href={eventInfo.external_event_url}>Event Details </a>
	      	</div>
      		<p dangerouslySetInnerHTML={{__html: eventInfo.body}} />

				</div>
			</div>
		)
	}
}

export default EventModal