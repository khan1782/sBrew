import React, { Component } from 'react';

class FeaturedComponent extends Component {
	render(){
		return(
			<div >
					<p>{this.props.featured.name}</p>
					<img
						style={{width:"200px","height":"200px"}}
						src={this.props.featured.photo} />
			</div>
		)
	}
}


console.log("FeaturedComponent.js from components")

export default FeaturedComponent