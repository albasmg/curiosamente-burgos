import React, { useEffect, useRef } from 'react'
import Glide from '@glidejs/glide'

const Carousel = ({ photos }) => {
  const carouselWrapper = useRef(null)

  useEffect(() => {
    if (!carouselWrapper.current) return
    const glide = new Glide(carouselWrapper.current, {
      type: 'carousel',
      autoplay: 2000,
      hoverpause: false,
    })
    glide.mount()

    return () => glide.destroy()
  }, [])

  return (
    <div className="glide carousel" ref={carouselWrapper}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {photos.map((photo, index) => (
            <li className="glide__slide carousel-item" key={index}>
              <img
                src={photo}
                alt={`foto_${index}`}
                className="carousel-image"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

//TODO: add proptypes

export default Carousel
