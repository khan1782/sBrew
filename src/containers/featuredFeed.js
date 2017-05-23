import React, { Component } from 'react';
import FeaturedComponent from '../components/featuredComponent'
import PropTypes from 'prop-types'
import Slider from 'react-slick';

class FeaturedFeed extends Component {
//incoming featureFeed --- feed={this.state.featureFeed}
//incomngin
	render(){
		var settings={dots:true,infinite:true,speed:500,slidesToShow:3,slidesToScroll:1, arrows:true,focusOnSelect:true,centerMode:true}
		const { feed } = this.props
		return(
			<div
				style={{width:"100%", border:"solid red"}}>
					<Slider {...settings}>
						{feed.map((featured)=>{
							return <div key={featured.uuid}><FeaturedComponent 
								featured={featured}/></div>
						})}
					</Slider>
			</div>
		)
	}
}


console.log("featuredfeeds.js from containers")
export default FeaturedFeed