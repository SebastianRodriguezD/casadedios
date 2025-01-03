import { Link } from 'react-router-dom'
import ContactForm from '../../components/ContactForm/ContactForm'
import MapComponent from '../../components/MapComponent/MapComponent'

import './Contacto.css'

const Contacto = () => {
  return (
    <main>
      <div id='Contacto'>
        <div className='text_contact'>
          <h2>Contacto</h2>
          <br />
          <p>A TRAVÉS DE REDES SOCIALES</p>
          <div>
            <a
              href='https://www.facebook.com/CASADEDIOSjohnedwardmr'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img_footer'
                src='./src/assets/facebook.png'
                alt='logo_facebook'
              />
            </a>
            <a
              href='https://www.instagram.com/casadedios_zaragoza/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='img_footer'
                src='./src/assets/instagram.png'
                alt='logo_instagram'
              />
            </a>
          </div>
          <Link to='/'>
            <img
              className='logo'
              src='./src/assets/4317.PNG'
              alt='logo-iglesia'
            />
          </Link>
        </div>
        <ContactForm />
        <MapComponent />
      </div>
    </main>
  )
}

export default Contacto
