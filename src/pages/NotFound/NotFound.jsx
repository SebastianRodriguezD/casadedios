import './NotFound.css'

const NotFound = () => {
  return (
    <main id='main'>
      <div className='not-found'>
        <h1 className='not-found-title'>404</h1>
        <h2 className='not-found-subtitle'>Página no encontrada</h2>
        <p className='not-found-text'>
          Lo sentimos, la ruta solicitada no existe. Por favor, verifica la URL
          o vuelve a la página principal.
        </p>
        <a href='/' className='not-found-link'>
          Volver al inicio
        </a>
      </div>
    </main>
  )
}

export default NotFound
