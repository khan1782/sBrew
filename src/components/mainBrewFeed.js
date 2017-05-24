import React, { Component } from 'react';

class MainBrewFeed extends Component {
	render(){
		const {brews,visibility,setModalID,toggleVisibility} = this.props
		var toggle= "hidden"

		if(visibility.feeds.brewFeed) toggle = "visible"

		return(
			<div style={{visibility:toggle,position:"absolute"}}>
					{brews.map((b,i)=>{
						return <BrewFeedComponent
							setModalID={setModalID}
							toggleVisibility={toggleVisibility}
							key={i}
							brew={b}
							id={b.uuid} />
					})}
			</div>
		)
	}
}

class BrewFeedComponent extends Component{
	constructor(props){
		super(props)
		this.handleClick=this.handleClick.bind(this)
	}
	handleClick(){
		this.props.toggleVisibility("modals","brewModal")
		
		this.props.setModalID(this.props.id)
	}
	render(){
		const {brew} = this.props
		return(
			<div
				onClick={this.handleClick}>
				{brew.name}---{brew.photo}
			</div>
		)
	}
}


console.log("mainBrewFeed from components")

export default MainBrewFeed