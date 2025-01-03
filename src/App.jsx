import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contacto from './pages/Contacto/Contacto'
import Donacion from './pages/Donacion/Donacion'
import Eventos from './pages/Eventos/Eventos'
import NotFound from './pages/NotFound/NotFound'
import ServiciosPage from './pages/ServiciosPage/ServiciosPage'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/eventos' element={<Eventos />} />
          <Route path='/servicios' element={<ServiciosPage />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/donacion' element={<Donacion />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
