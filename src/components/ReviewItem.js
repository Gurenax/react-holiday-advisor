import React from 'react'

const ReviewItem = ({ review }) => (
  <div>
    <div className="row">
      <div className="col">
        <h5>{review.user}</h5>
      </div>
      <div className="col">
        <span>Rating: {review.rating}</span>
      </div>
    </div>
    <p>{review.description}</p>
  </div>
)

export default ReviewItem
