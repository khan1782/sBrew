import React, { Component } from 'react';

class MainBrewFeed extends Component {
	render(){
		const {brews,visibility} = this.props
		var toggle= "hidden"

		if(visibility.BREW_FEED) toggle = "visible"

		return(
			<div style={{visibility:toggle,position:"absolute"}}>
					{brews.map((b,i)=>{
						return <BrewFeedComponent
							key={i}
							brew={b} />
					})}
			</div>
		)
	}
}

class BrewFeedComponent extends Component{
	render(){
		const {brew} = this.props
		return(
			<div>
				{brew.name}---{brew.photo}
			</div>
		)
	}
}


console.log("mainBrewFeed from components")

export default MainBrewFeed