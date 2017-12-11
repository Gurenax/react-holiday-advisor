import React from 'react'
import { formatNumberToCurrency } from '../helpers/currency'
import pluralize from 'pluralize'

const ListingItem = ({ listing, onClickViewListing }) => {
  return (
    <div className="card mr-2 mb-2" style={{ width: 20 + 'rem' }}>
      <img
        className="card-img-top"
        src={listing.photos[0].imageUrl}
        alt={listing.photos[0].imageCaption}
        height={200}
      />
      <div className="card-body">
        <h4 className="card-title">{listing.name}</h4>
        <div className="card-text row">
          <p className="col">
            {!!listing.reviews
              ? listing.reviews.length +
                pluralize(' Review', listing.reviews.length)
              : 'No Reviews'}
          </p>
          <h5 className="col text-right">
            {formatNumberToCurrency(listing.pricePerNight, 'AUD')}
          </h5>
        </div>
        <p className="card-text">{listing.location}</p>
        <button
          className="btn btn-primary"
          onClick={() => onClickViewListing(listing)}
        >
          View Listing
        </button>
      </div>
    </div>
  )
}

export default ListingItem
