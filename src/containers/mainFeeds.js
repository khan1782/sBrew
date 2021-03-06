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
			eventComponent.id				 = e.id
			eventComponent.city 		 = l.city
			return eventComponent
		})
	}

	generateBrewFeed(){
		const {brews} = this.props.show
		var filteredBrews = brews.filter((b)=>{return typeof b.name ==="string"})
		return filteredBrews.map((b)=>{
			return {
				name:b.name,
				photo:b.photo.url,
				uuid:b.uuid
			}
		})
	}


	render(){
		const { toggleVisibility, show, visibility, setModalID } = this.props
		const { eventFeed, brewFeed } = this.state
		return(
			<div>
					<MainFeedNav 
						toggleVisibility={toggleVisibility}/>
					<div style={{width:"900px",margin:"0 auto"}}>
						<div style={{width:"900px",position:"absolute",margin:"0 auto"}}>
							<MainEventFeed
								events={eventFeed}
								toggleVisibility={toggleVisibility}
								visibility={visibility}
								setModalID={setModalID} />
							<MainBrewFeed
								brews={brewFeed}
								toggleVisibility={toggleVisibility}
								visibility={visibility}
								setModalID={setModalID} />
							<MainLocationFeed
								locations={show.locations}
								toggleVisibility={toggleVisibility}
								visibility={visibility}
								setModalID={setModalID} />
						</div>
					</div>
			</div>
		)
	}
}



export default MainFeeds


//event:
	//start_date
	//title
	//event_phosos.url
	//location-city

	
