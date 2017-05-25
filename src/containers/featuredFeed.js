import React, { Component } from 'react';
import FeaturedComponent from '../components/featuredComponent'
// import PropTypes from 'prop-types'
import Slider from 'react-slick';

class FeaturedFeed extends Component {
//incoming featureFeed --- feed={this.state.featureFeed}
//incomngin
	render(){
		var settings={dots:true,infinite:true,speed:500,slidesToShow:3,slidesToScroll:1, arrows:true,focusOnSelect:true,centerMode:true}
		const style={
			width:"100%",
			padding:"30px",
			paddingTop:"25px",
			backgroundColor:"rgba(11, 102, 127,0.5)"
		}
		const { feed, toggleVisibility, setModalID } = this.props
		return(
			<div
				style={style}>
					<Slider {...settings}>
						{feed.map((featured,i)=>{
							return ( 
								<div key={i}>
									<FeaturedComponent 
										featured={featured}
										toggleVisibility={toggleVisibility}
										setModalID={setModalID} />
								</div>
							)
						})}
					</Slider>
			</div>
		)
	}
}



export default FeaturedFeed