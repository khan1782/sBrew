import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FeaturedFeed from './containers/featuredFeed'
import MainFeeds from './containers/mainFeeds'
import Modals from './containers/modals'
import * as BeerActions from './actions'
import $ from 'jquery'; 
import './App.css';



console.log("app.js from src 1/1")
class App extends Component {
  constructor(props){
    super(props)


    this.state={
      brewResponse:[],
      brewResponseProcessed:false,
      eventResponse:[],
      eventResponseProcessed:false,
      featureFeed :this.generateFeaturedFeed()
    }
    this.props.actions.setLocations(this.decoupleLocation(this.props.show.brews))
    
  }

  decoupleLocation(rawBreweryArray){
   let locationArray = []
   rawBreweryArray.forEach((b) => {
       b.locations.forEach((l) => {
         l.instagram=b.instagram
         l.website=b.website
         l.photo=b.photo.url
         l.facebook=b.facebook
         locationArray.push(l)
       })
   })
   return locationArray
  }

  generateFeaturedFeed(){
    var featuredFeed = []
    var breweries = this.props.show.brews
    var numBreweries = breweries.length
    let numFeedComponents = 5

    for(var i=0;i<numFeedComponents;i++){
      let randomIndex = Math.floor(Math.random()*numBreweries)
      let featureComponent = {}
      let brew = breweries[randomIndex]

      featureComponent.photo = brew.photo.url
      featureComponent.name = brew.name
      featureComponent.uuid = brew.uuid

      featuredFeed.push(featureComponent)
    }
    return featuredFeed
  }

  // generateMainLocationFeed(){
  //   const { locations } = this.props.show
  //   var mainLocationFeed = []
  //   locations.forEach((loc)=>{
  //     let l = {}
  //     l.name=loc.name
  //     l.locationTags=loc.location_tags
  //     l.lat=loc.lat
  //     l.lon=loc.lon
  //     l.phone=loc.phone
  //     l.street=loc.street
  //     l.uuid=loc.uuid
  //     l.city=loc.city
  //     mainLocationFeed.push(l)
  //   })
  //   const { brews } = this.props.show
  //   brews.forEach
  // }
  
  render() {
    const {show,actions,visibility} = this.props
    console.log("show:",show)
    console.log("actions:",actions)
    return (
      <div>
        <FeaturedFeed 
          feed={this.state.featureFeed}
          toggleVisibility={actions.toggleVisibility}
          setModalID={actions.setModalID} /> 
        <MainFeeds
          show={show}
          toggleVisibility={actions.toggleVisibility}
          visibility={visibility}
          setModalID={actions.setModalID} />
        <Modals
          show={show}
          visibility={visibility}
          toggleVisibility={actions.toggleVisibility} />
      </div>
    );
  }
}


















function mapStateToProps(state) {
  console.log("map state to props from apps run")
  return {
    show:state.show,
    visibility:state.visibility
  }
}

function mapDispatchToProps(dispatch) {
  console.log("mapdispatchtoprops from apps run")
  return{ 
    actions:bindActionCreators(BeerActions,dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


// App
//   navbar - search 
//   featured horizontal feed - opp for instagram???
//   navbar -events,locations,breweries
//   feed, all three same position


// event modal
//   modal feed 
//     location instagram pictures
//     location google maps

// brewery modal
//   locations feed
//   events feed

// location modal
//   modal location
//     events feed
//     brewery info



  //https://fictionlog.co/!!!!




//<NavBar /> - eh?
//<FeaturedFeed /> - container  
    //=>events,location,
    //<FeaturedEventFeed /> -presentation
      //=>event picture, name, locationncity, 

//<MainFeed /> -container
    //<MainEventFeed /> -presentation
    //<MainLocationFeed /> -presentation
    //<MainBrewFeed /> -presentation

//<Modals /> -container
  //<EventModal /> -presentation && -container
      //<EventModalFeed /> -presentation
  //<BrewModal /> -presentation && -container
      //<BrewModalFeed /> -presentation
  //<LocationModal /> -presentation && -container
      //<LocationtModalFeed /> -presentation