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

		const style={
			visibility:toggle,
			position:'absolute',
			backgroundColor:"rgb(242, 242, 242)",
			textAlign:"center"
		}
		// const buttonStyle={
		// 	padding:"6px",
		// 	paddingTop:"8px",
		// 	paddingBottom:"8px",
		// 	borderRadius:"7px",
		// 	backgroundColor:"white",
		// 	marginLeft:"5px",
		// 	border:"groove rgba(232,232,232,0.4)"
		// }
		return(
			<div style={style}>
				<div style={{width:"900px",height:"65px",border:"groove rgba(232,232,232,0.6) 1px",padding:"20px",paddingTop:"12px",backgroundColor:"rgba(11, 102, 127,0.15)"}}>
					<input className="input-bar" placeholder="search"></input>
					<span className="hover underline filter">Beer Promotions</span>
					<span className="hover underline filter">Sports</span>
					<span className="hover underline filter">Beer Release</span>
					<span className="hover underline filter">Charities</span>
					<span className="hover underline filter">Food Pairings</span><br/>
					<div style={{padding:"6px"}}></div>
					<span className="hover underline filter" style={{marginTop:"12px",marginLeft:"230px"}}>Special Casks</span>
					<span className="hover underline filter">Festivals</span>
					<span className="hover underline filter">Education</span>
					<span className="hover underline filter">Special Taps</span>
				</div>
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
		const style={
			width:"240px",
			height:"200px",
			backgroundColor:"white",
			margin:"20px",
			display:'inline-block',
			overflow:"hidden",
			content:"''",
			textAlign:"center",
			position:"relative",
			boxShadow:"0 1px 20px -8px #636463"
		}
		return(
			<div
				className="shadow-hover"
				style={style}
				onClick={this.handleClick}>
				<header style={{paddingTop:"5px",paddingBottom:"-5px"}}>{event.title}</header>
				
				<img 
					className="hover"
					style={{position:"absolute",bottom:"0",left:"0"}}
					src={event.photo} 
					alt="event" 
					width="240px"
					 />
					
			</div>
		)
	}
}






export default MainEventFeed