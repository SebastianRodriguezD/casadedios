import './MapComponent.css'

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapComponent = () => {
  const position = [41.65634813867398, -0.9058359741366478]

  return (
    <div className='map-wrapper'>
      <h2 className='map-title'>Cómo llegar</h2>
      <MapContainer
        center={position}
        zoom={15}
        className='map-container'
        zoomControl={false} // Desactiva los controles predeterminados
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup className='popup'>
            <a
              href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
              target='_blank'
              rel='noopener noreferrer'
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <strong>Iglesia Casa de Dios</strong>
              <br />
              <strong>Calle Santa Ororia 38</strong>
              <br />
              Zaragoza, España
              <br />
              <span style={{ color: '#007BFF', textDecoration: 'underline' }}>
                Ver en Google Maps
              </span>
            </a>
          </Popup>
        </Marker>
        <ZoomControl position='bottomright' className='zoom' />
        {/* Controles de zoom en la esquina inferior derecha */}
      </MapContainer>
      <div className='map-link'>
        <a
          href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Ir a Google Maps
        </a>
      </div>
    </div>
  )
}

export default MapComponent
