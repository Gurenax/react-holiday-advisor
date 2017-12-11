import React from 'react'
import ReviewItem from './ReviewItem'

const ReviewList = ({ reviews }) => (
  <div>
    {reviews.map(review => <ReviewItem key={review._id} review={review} />)}
    <button className="btn btn-primary">Write a Review</button>
  </div>
)

export default ReviewList
