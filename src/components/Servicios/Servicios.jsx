import './Servicios.css'

const Servicios = () => {
  return (
    <div className='servicios'>
      <h1 className='h1_servicios'>Servicios</h1>
      <p className='p_servicios'>Horarios</p>
      <div className='servicios-container'>
        <div className='div_servicios'>
          <h2 className='h2_servicios'>Domingos</h2>
          <h3 className='p_horas_sabados'>Culto Congregacional</h3>
          <p className='p_horas_sabados'>11:00h a 13:00h</p>
        </div>
        <div className='div_servicios'>
          <h2 className='h2_servicios'>Sábados</h2>
          <h3 className='p_horas_sabados'>Ayuno Congregacional</h3>
          <p className='p_horas_sabados'>10:00h a 13:00h</p>
          <h3 className='p_horas_sabados'>Culto de Jóvenes</h3>
          <p className='p_horas_sabados'>19:00h a 21:00h</p>
        </div>
        <div className='div_servicios'>
          <h2 className='h2_servicios'>Lunes</h2>
          <h3 className='p_horas_sabados'>Estudio Bíblico</h3>
          <p className='p_horas_sabados'>19:00h a 20:00h</p>
        </div>
        <div className='div_servicios'>
          <h2 className='h2_servicios'>Martes</h2>
          <h3 className='p_horas_sabados'>Estudio Bíblico</h3>
          <p className='p_horas_sabados'>19:00h a 20:00h</p>
        </div>
        <div className='div_servicios'>
          <h2 className='h2_servicios'>Miércoles</h2>
          <h3 className='p_horas_sabados'>Casas de Poder</h3>
          <p className='p_horas_sabados'>19:00h a 20:00h</p>
        </div>
      </div>
    </div>
  )
}
export default Servicios
