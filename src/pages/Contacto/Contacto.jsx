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
                src='https://res.cloudinary.com/dpqksttwy/image/upload/v1735923462/Casa%20de%20Dios/facebook_j3ldyn.png'
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
                src='https://res.cloudinary.com/dpqksttwy/image/upload/v1735923462/Casa%20de%20Dios/instagram_i5lvra.png'
                alt='logo_instagram'
              />
            </a>
          </div>
          <Link to='/'>
            <img
              className='logo'
              src='https://res.cloudinary.com/dpqksttwy/image/upload/v1735923512/Casa%20de%20Dios/logo_iglesia_xlmdn5.png'
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
