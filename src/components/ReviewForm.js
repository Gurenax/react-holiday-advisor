import React from 'react'

const ReviewForm = ({ listing, onFormSubmitWriteReview }) => {
  return (
    <form
      className="mt-3"
      onSubmit={event => {
        event.preventDefault()
        const user = event.target.user.value
        const rating = event.target.rating.value
        const description = event.target.description.value
        onFormSubmitWriteReview({user, rating, description})
      }}
    >
      <div className="form-group">
        <label htmlFor="user">Name</label>
        <input
          type="text"
          className="form-control"
          name="user"
          id="user"
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <br />
        <span>0</span>
        <input type="range" name="rating" id="rating" min="0" max="5" defaultValue="0" />
        <span>5</span>
      </div>

      <div className="form-group">
        <label htmlFor="descripiton">Description</label>
        <textarea
          className="form-control"
          name="description"
          id="descripiton"
          rows="3"
          placeholder="Enter description"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default ReviewForm
