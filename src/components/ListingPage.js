import React from 'react'

const ListingPage = ({
  listing,
  onClickBackToListings
}) => {
  return (
    <div>
      <img src={listing.photos[0].imageUrl} alt={listing.photos[0].imageCaption} height={200} />
      <h1>{listing.name}</h1>
      <h2>{listing.pricePerNight}</h2>
      <p>{listing.description}</p>
      <button className='btn btn-primary'>Book Now</button>
      <button className='btn btn-primary' onClick={onClickBackToListings}>Back</button>
      <h3>Photos: {!!listing.photos && listing.photos.length}</h3>
      <h3>Reviews: {!!listing.reviews && listing.reviews.length}</h3>
    </div>
  )
}

export default ListingPage