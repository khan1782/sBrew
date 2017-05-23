import React, { Component } from 'react'

class MainFeedNav extends Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		console.log("clicked")
		this.props.toggleVisibility("EVENT_FEED")
	}
	render(){
		return(
			<div 
				style={{marginTop:"20px",display:"inline-block"}}
				onClick={this.handleClick}>
				Events
			</div>
		)
	}
}

// class NavButton extends Component {
// 	render(){
// 		const { title } = this.props
// 		return(
// 			<div style={{display:"inline-block"}}>
// 				{title}
// 			</div>
// 		)
// 	}
// }





export default MainFeedNav