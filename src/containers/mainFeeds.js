import React, { Component } from 'react';
import MainEventFeed from '../components/mainEventFeed'
import MainBrewFeed from '../components/mainBrewFeed'
import MainLocationFeed from '../components/mainLocationFeed'
import MainFeedNav from '../components/mainFeedNav'

class MainFeeds extends Component {
//incoming action=this.props.action
//incoming show=this.props.show
	constructor(props){
		super(props)
		this.state={eventFeed:[],brewFeed:[]}		
	}

	componentDidUpdate(){
		if(this.props.show.locations.length > 0 && this.state.eventFeed.length ===0	&& this.props.show.brews.length > 0){
			this.setState({eventFeed:this.generateEventFeed(),brewFeed:this.generateBrewFeed()})
		}
	}

	generateEventFeed(){
		const {show} = this.props
		var filteredEvents = show.events.filter((e)=>{return e.visible && Date.parse(e.start_date) > Date.parse(Date()) })
		return filteredEvents.map((e)=>{
			let eventComponent = {}
			let l = show.locations.find((loc)=> {return e.location_uuid === loc.uuid})
			eventComponent.title		 = e.title
			eventComponent.startDate = e.start_date
			eventComponent.photo 		 = e.event_photos[0].url
			eventComponent.city 		 = l.city
			return eventComponent
		})
	}

	generateBrewFeed(){
		const {brews} = this.props.show
		var filteredBrews = brews.filter((b)=>{return typeof b.name !="string"})
		return brews.map((b)=>{
			return {
				name:b.name,
				photo:b.photo.url
			}
		})
	}

	render(){
		const { toggleVisibility, show, visibility } = this.props
		const { eventFeed, brewFeed } = this.state
		return(
			<div 
				style={{width:"600px"}}>
					<MainFeedNav 
						toggleVisibility={toggleVisibility}/>
					<MainEventFeed
						events={eventFeed}
						toggleVisibility={toggleVisibility}
						visibility={visibility} />
					<MainBrewFeed
						brews={brewFeed}
						toggleVisibility={toggleVisibility}
						visibility={visibility} />
					<MainLocationFeed
						locations={show.locations}
						toggleVisibility={toggleVisibility}
						visibility={visibility} />
			</div>
		)
	}
}


console.log("mainfeeds.js from containers")
export default MainFeeds


//event:
	//start_date
	//title
	//event_phosos.url
	//location-city

	
