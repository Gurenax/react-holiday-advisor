import React from 'react'

const ListingItem = ({
  listing,
  onClickViewListing
}) => {
  return (
    <div className="card mr-2 mb-2" style={{width: 20+'rem'}}>
      <img className="card-img-top" src={listing.photos[0].imageUrl} alt={listing.photos[0].imageCaption} height={200} />
      <div className="card-body">
        <h4 className="card-title">{listing.name}</h4>
        <p className="card-text">{listing.description}</p>
        <a href="#" className="btn btn-primary" onClick={ (event) => onClickViewListing(event, listing) } >View Listing</a>
      </div>
    </div>
  )
}

export default ListingItem