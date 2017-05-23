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
		const {visibility} = this.props
		const {events} = this.state
		var toggle = "visible"

		if(visibility.EVENT_FEED) toggle= "hidden"

		return(
			<div style={{visibility:toggle,position:"absolute"}}>
				{events.map((event,i)=>{
					return <EventFeedComponent
						event={event}
						key={i} />
				})}
			</div>
		)
	}
}


class EventFeedComponent extends Component {
	render(){
		const {event} = this.props
		return(
			<div>
				{event.startDate}:{event.title}  --  {event.city}:{event.photo}
			</div>
		)
	}
}




console.log("mainEventFeed from components")

export default MainEventFeed