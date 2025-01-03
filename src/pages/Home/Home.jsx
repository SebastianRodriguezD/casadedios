import Hero from '../../components/Hero/Hero'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import MapComponent from '../../components/MapComponent/MapComponent'
import Servicios from '../../components/Servicios/Servicios'
import './Home.css'

const Home = () => {
  return (
    <main id='main'>
      <HeroSlider />
      <Hero />
      <Servicios />
      <MapComponent />
    </main>
  )
}

export default Home
