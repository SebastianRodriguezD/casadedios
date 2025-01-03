import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'
import Button from '../Burtton/Button'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className='navbar'>
      <div>
        <Link to='/'>
          <img
            className='logo'
            src='./src/assets/4317.PNG'
            alt='logo-iglesia'
          />
        </Link>
      </div>
      <nav>
        <ul className={`nav_items ${isOpen && 'open'}`}>
          <li>
            <NavLink to='/'>
              <i className='fas fa-home'></i> {/* Ícono de casa */}
            </NavLink>
          </li>
          <li>
            <NavLink to='/eventos'>Eventos</NavLink>
          </li>
          <li>
            <NavLink to='/servicios'>Servicios</NavLink>
          </li>
          <li>
            <NavLink to='/contacto'>Contacto</NavLink>
          </li>
          <Button
            className='button_nav'
            text='Realizar Donación'
            path='/donacion'
          />
        </ul>
      </nav>

      <div
        className={`nav_toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default Header
