import React from 'react'

const PhotosList = ({ photos }) => (
  <div className="d-flex flex-wrap">
    {photos.map((photo, index) => (
      <img
        key={photo._id}
        className="mr-3 mb-3"
        src={photo.imageUrl}
        alt={photo.imageCaption}
        height={200}
        width={200}
      />
    ))}
  </div>
)

export default PhotosList
