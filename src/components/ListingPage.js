import React from 'react'
/* Helpers */
import { formatNumberToCurrency } from '../helpers/currency'
/* Components */
import PhotosList from './PhotosList'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'

const ListingPage = ({
  listing,
  onClickBackToListings,
  onClickWriteReview,
  formReviewActive,
  onFormSubmitWriteReview
}) => {
  return (
    <div>
      <button className="btn btn-primary btn-block mt-1 mb-1" onClick={onClickBackToListings}>
        Back
      </button>
      <img
        src={listing.photos[0].imageUrl}
        alt={listing.photos[0].imageCaption}
        height={200}
      />
      <h1>{listing.name}</h1>
      <h2>{formatNumberToCurrency(listing.pricePerNight, 'AUD')}</h2>
      <p>{listing.description}</p>
      <button className="btn btn-primary btn-block mt-1 mb-1">Book Now</button>
      <h3>Photos: {!!listing.photos && listing.photos.length}</h3>
      {!!listing.photos && <PhotosList photos={listing.photos} />}
      <h3>Reviews: {!!listing.reviews && listing.reviews.length}</h3>
      {!!listing.reviews && (
        <ReviewList
          reviews={listing.reviews}
          onClickWriteReview={onClickWriteReview}
          formReviewActive={formReviewActive}
        />
      )}
      {!!formReviewActive && (
        <ReviewForm
          listing={listing}
          onFormSubmitWriteReview={onFormSubmitWriteReview}
        />
      )}
    </div>
  )
}

export default ListingPage
