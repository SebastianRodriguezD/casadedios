import { useState, useEffect } from 'react'
import './HeroSlider.css'
import sliderImages from '../../utils/sliderImages.js'

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='slider'>
      <div className='slider-images'>
        {sliderImages.map((image, index) => (
          <div
            key={image.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} className='slider-img' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
