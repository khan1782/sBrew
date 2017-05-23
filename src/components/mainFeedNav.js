import React, { Component } from 'react'

class MainFeedNav extends Component {
	render(){
		const { toggleVisibility } = this.props
		return(
			<div>
				<NavButton 
					title="EVENT_FEED"
					toggleVisibility={toggleVisibility} />
				<NavButton 
					title="LOCATION_FEED"
					toggleVisibility={toggleVisibility} />
				<NavButton 
					title="BREW_FEED" 
					toggleVisibility={toggleVisibility} />
			</div>
		)
	}
}

class NavButton extends Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		this.props.toggleVisibility(this.props.title)
	}
	render(){
		const { title } = this.props
		return(
			<div 
				style={{marginTop:"20px",display:"inline-block"}}
				onClick={this.handleClick} >
				{title}
			</div>
		)
	}
}





export default MainFeedNav