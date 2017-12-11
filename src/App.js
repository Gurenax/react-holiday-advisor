import React, { Component } from 'react'
import './App.css'
/* Components */
import Listings from './components/Listings'
import ListingPage from './components/ListingPage'

/* Helpers */
const scrollToTop = window => {
  window.scrollTo(0, 0)
}

const listingsArray = [
  {
    _id: '1',
    name: 'Hotel the Serras',
    pricePerNight: 300,
    location: 'Barcelona, Spain',
    description: 'A nice hotel to sleep in',
    photos: [
      {
        _id: 'p1',
        imageUrl:
          'https://d2mldj1bh8howu.cloudfront.net/_novaimg/2523411-797881_0_131_1600_800_1400_700.rc.jpg',
        imageCaption: 'Hotel Room'
      },
      {
        _id: 'p2',
        imageUrl:
          'https://d2mldj1bh8howu.cloudfront.net/_novaimg/2523411-797881_0_131_1600_800_1400_700.rc.jpg',
        imageCaption: 'Hotel Room'
      },
      {
        _id: 'p3',
        imageUrl:
          'https://d2mldj1bh8howu.cloudfront.net/_novaimg/2523411-797881_0_131_1600_800_1400_700.rc.jpg',
        imageCaption: 'Hotel Room'
      }
    ],
    reviews: [
      {
        _id: 'r1',
        user: 'Alessio',
        description: 'I love the coffee here',
        rating: 4.5
      }
    ]
  },
  {
    _id: '2',
    name: 'Turn Palace Hotel',
    pricePerNight: 200,
    location: 'Barcelona, Spain',
    description: 'Holiday like a king',
    photos: [
      {
        _id: 'p4',
        imageUrl:
          'https://s-ec.bstatic.com/images/hotel/max1024x768/106/106485456.jpg',
        imageCaption: 'Dining Room'
      }
    ],
    reviews: [
      {
        _id: 'r2',
        user: 'John',
        description: 'The food is great',
        rating: 4.7
      }
    ]
  },
  {
    _id: '3',
    name: 'Vahine Island - Private Island Resort',
    pricePerNight: 200,
    location: 'Tahaa, French Polynesia',
    description: 'Not much land but a lot of heart.',
    photos: [
      {
        _id: 'p5',
        imageUrl:
          'https://www.slh.com/globalassets/hotels/v/vahine-island/vahine_island_hurfpvi_hero_2.jpg',
        imageCaption: 'Vahine Island'
      }
    ],
    reviews: [
      {
        _id: 'r3',
        user: 'Nisal',
        description: 'Hehhheheh',
        rating: 5
      }
    ]
  }
]

class App extends Component {
  state = {
    listings: listingsArray,
    selectedListing: null,
    formReviewActive: false
  }

  render() {
    const { listings, selectedListing, formReviewActive } = this.state

    return (
      <div className="App container-fluid">
        <h1>React Holiday Advisor</h1>
        {!!selectedListing ? (
          <ListingPage
            listing={selectedListing}
            onClickBackToListings={this.onClickBackToListings}
            onClickWriteReview={this.onClickToggleWriteReview}
            formReviewActive={formReviewActive}
            onFormSubmitWriteReview={this.onFormSubmitWriteReview}
          />
        ) : (
          !!listings ? (
          <Listings
            listings={listings}
            onClickViewListing={this.onClickViewListing}
          /> ) : ( <div>Loading...</div> )
        )}
      </div>
    )
  }

  /* Event Handlers */
  onClickViewListing = listing => {
    const selectedListing = { ...listing }
    scrollToTop(window)
    /* Set the selected listing to the state */
    this.setState({
      selectedListing
    })
  }

  onClickBackToListings = () => {
    scrollToTop(window)
    /* Clear the selected listing */
    this.setState({
      selectedListing: null
    })
  }

  onClickToggleWriteReview = () => {
    /* Show Review Form */
    this.setState( prevState => {
      const prevFormReviewActive = prevState.formReviewActive
      return { formReviewActive: !prevFormReviewActive }
    })
  }
  
  onFormSubmitWriteReview = data => {
    const { listings, selectedListing } = this.state
    const review = {...data}

    /* Add review to a listings review list */
    const newListings = listings.map( listing => {
      if(listing._id === selectedListing._id) {
        const copy = {...listing}
        copy.reviews.push(review)
        return copy
      }
      return listing
    })

    /* New listings */
    this.setState({
      listings: newListings
    })
  }
}

export default App
