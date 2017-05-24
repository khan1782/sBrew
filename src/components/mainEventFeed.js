import React, { Component } from 'react';
// import EventFeedComponent from '../components/eventFeedComponent'

class MainEventFeed extends Component {
	constructor(props){
		super(props)
		this.state={events:[]}
	}

	componentDidUpdate(){
		if(this.state.events.length === 0){
			this.setState({events:this.sortEvents(this.props.events)})
		}
	}

	sortEvents(events){
		return events.sort((a,b)=>{
	    if(a.startDate > b.startDate) return 1;
      if(a.startDate < b.startDate) return -1;
      return 0
		})
	}

	render(){
		const {visibility,toggleVisibility,setModalID} = this.props
		const {events} = this.state
		var toggle = "hidden"

		if(visibility.feeds.eventFeed) toggle= "visible"

		return(
			<div style={{visibility:toggle,position:"absolute"}}>
				{events.map((event,i)=>{
					return <EventFeedComponent
						setModalID={setModalID}
						toggleVisibility={toggleVisibility}
						event={event}
						key={i} 
						id={event.id} />
				})}
			</div>
		)
	}
}


class EventFeedComponent extends Component {
	constructor(props){
		super(props)
		this.handleClick=this.handleClick.bind(this)
	}

	handleClick(){
		this.props.toggleVisibility("modals","eventModal")
		this.props.setModalID(this.props.id)
	}

	render(){
		const {event} = this.props
		return(
			<div
				onClick={this.handleClick}>
				{event.startDate}:{event.title}  --  {event.city}:{event.photo}
			</div>
		)
	}
}




console.log("mainEventFeed from components")

export default MainEventFeed