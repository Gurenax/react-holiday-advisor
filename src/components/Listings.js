import React from 'react'
import ListingItem from './ListingItem'

const Listings = ({
  listings,
  onClickViewListing
}) => {
  return (
    <div>
      <div className='d-flex flex-wrap'>
      {
        listings.map( listingItem => (
          <ListingItem key={listingItem._id} listing={listingItem} onClickViewListing={onClickViewListing} />
        ))
      }
      </div>
    </div>
  )
}

export default Listings