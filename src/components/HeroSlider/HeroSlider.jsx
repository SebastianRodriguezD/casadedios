import './HeroSlider.css'
import sliderImages from '../../utils/sliderImages.js'
import useSlider from './useSlider.js'

const HeroSlider = () => {
  const { currentIndex } = useSlider(sliderImages.length, 5000)

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
