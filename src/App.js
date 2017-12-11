import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Listings from './components/Listings'

const listingsArray = [
  {
    _id: 1,
    name: 'Hotel the Serras',
    pricePerNight: 300,
    location: 'Barcelona, Spain',
    description: 'A nice hotel to sleep in',
    photos: [{
      imageUrl: 'https://d2mldj1bh8howu.cloudfront.net/_novaimg/2523411-797881_0_131_1600_800_1400_700.rc.jpg',
      imageCaption: 'Hotel Room'
    }],
    reviews: [{
      user: 'Alessio',
      description: 'I love the coffee here',
      rating: 4.5
    }]
  },
  {
    _id: 2,
    name: 'Turn Palace Hotel',
    pricePerNight: 200,
    location: 'Barcelona, Spain',
    description: 'Holiday like a king',
    photos: [{
      imageUrl: 'https://s-ec.bstatic.com/images/hotel/max1024x768/106/106485456.jpg',
      imageCaption: 'Dining Room'
    }],
    reviews: [{
      user: 'John',
      description: 'The food is great',
      rating: 4.7
    }]
  },
  {
    _id: 3,
    name: 'Vahine Island - Private Island Resort',
    pricePerNight: 200,
    location: 'Tahaa, French Polynesia',
    description: 'Not much land but a lot of heart.',
    photos: [{
      imageUrl: 'https://www.slh.com/globalassets/hotels/v/vahine-island/vahine_island_hurfpvi_hero_2.jpg',
      imageCaption: 'Vahine Island'
    }],
    reviews: [{
      user: 'Nisal',
      description: 'Hehhheheh',
      rating: 5
    }]
  }
]

class App extends Component {
  state = {
    listings: listingsArray
  }

  render() {
    const { listings } = this.state

    return (
      <div className="App container-fluid">
        <h1>React Holiday Advisor</h1>
        <Listings listings={listings} onClickViewListing={this.onClickViewListing} />
      </div>
    );
  }

  /* Event Handlers */
  onClickViewListing = (event) => {
    event.preventDefault()
    console.log(event.target.name)
  }
}

export default App;
