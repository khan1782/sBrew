import React, { Component } from 'react'

class MainFeedNav extends Component {
	render(){
		const style={
			backgroundColor:"#0b667f",
			// paddingTop:"25px",
			// paddingBottom:"20px",
			width:"100%",
			height:"80px",
			textAlign:"center"
		}
		const { toggleVisibility } = this.props
		return(
			<div>
				<div style={style}>
					
				</div>
				<div className="nav-bar" style={{width:"100%",height:"55px", textAlign:"center"}}>
					<NavButton 
						feed="eventFeed"
						title="Events"
						toggleVisibility={toggleVisibility} />
					<NavButton 
						feed="locationFeed"
						title="Locations"
						toggleVisibility={toggleVisibility} />
					<NavButton 
						feed="brewFeed" 
						title="Breweries"
						toggleVisibility={toggleVisibility} />
				</div>
			</div>
		)
	}
}
//0 1px 20px -8px #636463
class NavButton extends Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		this.props.toggleVisibility("feeds",this.props.feed)
	}
	render(){
		const { title } = this.props
		const style={
			width:"100px",
			height:"40px",
			paddingLeft:"40px",
			paddingRight:"40px",
			paddingTop:"15px",
			// marginLeft:"20px",
			// marginRight:"20px",
			display:"inline-block",
			borderRight:"groove rgba(163, 163, 163,0.3) 1px",
			borderLeft:"groove rgba(163, 163, 163,0.3) 1px"
		}
		return(
			<div 
				style={style}
				className="hover underline"
				onClick={this.handleClick} >
				{title}
			</div>
		)
	}
}





export default MainFeedNav