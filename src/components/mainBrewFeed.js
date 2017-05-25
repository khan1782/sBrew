import React, { Component } from 'react';

class MainBrewFeed extends Component {
	render(){
		const {brews,visibility,setModalID,toggleVisibility} = this.props
		var toggle= "hidden"

		if(visibility.feeds.brewFeed) toggle = "visible"
			
		return(
			<div style={{visibility:toggle,position:"absolute",textAlign:"center",backgroundColor:"rgb(242, 242, 242)"}}>
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
		const style={
			width:"200px",
			height:"220px",
			// border:"dotted blue",
			margin:"30px",
			display:'inline-block',
			overflow:"hidden",
			content:"''",
			textAlign:"center",
			boxShadow:"0 1px 20px -8px #636463",
			backgroundColor:"white",
		}
		return(
			<div
				style={style}
				onClick={this.handleClick}>
				{brew.name}---
				<img
					src={brew.photo}
					width="200px"
					height="200px"
					alt="brew"
					className="hover" />
			</div>
		)
	}
}




export default MainBrewFeed