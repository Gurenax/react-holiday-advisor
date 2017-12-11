import React from 'react'
import ReviewItem from './ReviewItem'

const ReviewList = ({ reviews, onClickWriteReview, formReviewActive }) => (
  <div>
    {reviews.map(review => <ReviewItem key={review._id} review={review} />)}
    <button className="btn btn-primary btn-block mt-1 mb-1" onClick={onClickWriteReview}>
      {!formReviewActive ? 'Write a Review' : 'Close Review Form'}
    </button>
  </div>
)

export default ReviewList
