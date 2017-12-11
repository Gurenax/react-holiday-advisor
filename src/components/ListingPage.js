import React from 'react'
/* Helpers */
import { formatNumberToCurrency } from '../helpers/currency'
/* Components */
import PhotosList from './PhotosList'

const ListingPage = ({
  listing,
  onClickBackToListings
}) => {
  return (
    <div>
      <img src={listing.photos[0].imageUrl} alt={listing.photos[0].imageCaption} height={200} />
      <h1>{listing.name}</h1>
      <h2>{formatNumberToCurrency(listing.pricePerNight,'AUD')}</h2>
      <p>{listing.description}</p>
      <button className='btn btn-primary mr-1'>Book Now</button>
      <button className='btn btn-primary' onClick={onClickBackToListings}>Back</button>
      <h3>Photos: {!!listing.photos && listing.photos.length}</h3>
      {!!listing.photos && (
        <PhotosList photos={listing.photos} />
      )}
      <h3>Reviews: {!!listing.reviews && listing.reviews.length}</h3>
    </div>
  )
}

export default ListingPage