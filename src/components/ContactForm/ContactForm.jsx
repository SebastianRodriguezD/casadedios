import './ContactForm.css'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [consultaMotivo, setConsultaMotivo] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      motivoConsulta: consultaMotivo,
      nombre: name,
      correo: email,
      telefono: phone,
      ciudad: city,
      mensaje: message
    }

    emailjs
      .send(
        'service_tud0ipl',
        'template_zy50mim',
        formData,
        'QcePAHN3cfyRJ545B'
      )
      .then(
        (result) => {
          alert('Mensaje enviado: ' + result.text)
        },
        (error) => {
          alert('Hubo un error: ' + error.text)
        }
      )
  }

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <div className='form-group'>
        <label>Motivo de consulta:</label>
        <input
          type='text'
          value={consultaMotivo}
          onChange={(e) => setConsultaMotivo(e.target.value)}
          className='form-input'
          required
        />
      </div>
      <div className='form-group'>
        <label>Nombre:</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='form-input'
          required
        />
      </div>
      <div className='form-group'>
        <label>Correo electrónico:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-input'
          required
        />
      </div>
      <div className='form-group'>
        <label>Teléfono:</label>
        <input
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='form-input'
          required
        />
      </div>
      <div className='form-group'>
        <label>Ciudad:</label>
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='form-input'
          required
        />
      </div>
      <div className='form-group'>
        <label>Tu mensaje:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='form-input'
          required
        />
      </div>
      <button type='submit' className='submit-btn'>
        Enviar
      </button>
    </form>
  )
}

export default ContactForm
