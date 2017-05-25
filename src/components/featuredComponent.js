import React, { Component } from 'react';

class FeaturedComponent extends Component {
	constructor(props){
		super(props)
		this.handleClick=this.handleClick.bind(this)
	}

	handleClick(){
		this.props.toggleVisibility("modals","eventModal")
		this.props.setModalID(this.props.featured.id)
	}

	render(){
		const {featured} = this.props
		return(
			<div style={{textAlign:"center"}} className="featured-component">
					<p style={{height:"20px"}}>{featured.title}</p>
					<img
						onClick={this.handleClick}
						className="hover"
						alt="featured"
						style={{width:"400px","height":"200px",margin:"auto",}}
						src={featured.photo} />
			</div>
		)
	}
}




export default FeaturedComponent

