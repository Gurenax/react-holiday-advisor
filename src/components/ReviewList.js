import React from 'react'
import ReviewItem from './ReviewItem'

const ReviewList = ({ reviews }) => (
  <div>{reviews.map(review => <ReviewItem key={review._id} review={review} />)}</div>
)

export default ReviewList
