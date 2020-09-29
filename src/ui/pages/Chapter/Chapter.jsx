import React from 'react'
import Carousel from 'ui/components/Carousel/Carousel'

const Chapter = ({ photos }) => {
  return (
    <div className="chapter">
      <Carousel photos={photos} />
    </div>
  )
}

export default Chapter
