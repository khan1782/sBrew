import React, { Component } from 'react';
import './App.css';
import FeaturedFeeds from './containers/featuredFeeds'
import MainFeeds from './containers/mainFeeds'
import Modals from './containers/modals'

console.log("app.js from src 1/1")

class App extends Component {
  render() {
    return (
      <div>
       <FeaturedFeeds /> 
       <MainFeeds />
       <Modals />
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




//<NavBar /> - eh?
//<FeaturedFeed /> - container
    //<FeaturedEventFeed /> -presentation

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