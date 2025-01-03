import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <Link to='/'>
        <img className='logo' src='./src/assets/4317.PNG' alt='logo-iglesia' />
      </Link>
      <div className='home-container'>
        <h1 className='h1_home'>Casa de Dios</h1>
        <p className='p_home'>
          Más que una iglesia, somos embajadores de Cristo en España. Traemos el
          mensaje de salvacion en Cristo por medio del poder del Espiritu santo.
        </p>

        <div className='div_banner'>
          <h2 className='h2_banner'>Bienvenido</h2>
          <p className='p_banner'>Una familia te espera.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
