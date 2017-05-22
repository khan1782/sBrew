import React, { Component } from 'react';
import './App.css';
import FeaturedFeed from './components/featuredfeed'

console.log("app.js from src 1/1")

class App extends Component {
  render() {
    console.log(store)
    return (
      <div>
       <FeaturedFeed /> 
      </div>
    );
  }
}

export default App;


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


// COMPONENTS

  // App 
  //   featured feed
  //   navBar

  //   FeedContainer
  //     EventFeed
  //     BreweryFeed
  //     LocationFeed

  //   EventModal

  //   BreweryModal

  //   LocationModal
  //   



  //want a container component for the 3 presentation feeds
  //want a container component for presentation featured feed
  //want a container component for 3 presentation modals
    //nest container component in each presentation modal for modal feed
