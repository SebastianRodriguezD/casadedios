import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>Iglesia Casa de Dios.</p>
        <div className='footer-links'>
          <a
            href='https://www.google.com/maps?q=41.65634813867398,-0.9058359741366478'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='img_footer'
              src='https://res.cloudinary.com/dpqksttwy/image/upload/v1735923463/Casa%20de%20Dios/ubicaci%C3%B3n_j7ljrf.png'
              alt='logo_ubicacion'
            />
          </a>
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
        <p>
          <a
            href='/contacto'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            info@iglesiacasadedioszaragoza.es
          </a>
        </p>
        <p>+34 645 77 69 84</p>
        <p>Calle Santa Ororia 38, Zaragoza, España</p>
        <p>
          &copy; {new Date().getFullYear()} SR Medios Agencia. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
