# React Holiday Advisor

## State
```javascript
state = {
  userToken,
  currentCurrency,
  search: {
    keywords,
    priceRange,
    location
  },
  listings: [{
    name,
    pricePerNight,
    location,
    description,
    photos: [{
      imageUrl,
      imageCaption
    }]
    reviews: [{
      user,
      descriptiong,
      rating
    }]
  }],
  selectedListing
}
```

## Components
- Listings
- ListingPage
  - BookingForm
  - PhotosList
  - ReviewsList
    - ReviewItem
  - ReviewForm

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
