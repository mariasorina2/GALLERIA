import './BookingModal.css'
import Button from '../../Button/Button'
import { useState } from 'react'

function BookingModal({ selectedTitle, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    data: '',
    orario: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{selectedTitle}</h3>

        {submitted ? (
          <div className="thank-you-inside">
            <p>Grazie per la tua prenotazione, <strong>{formData.nome}</strong>!</p>
            <p>Riceverai una conferma via email.</p>
            <Button onClick={onClose}>Chiudi</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="booking-form">
            <input type="text" name="nome" placeholder="Nome" required onChange={handleChange} />
            <input type="text" name="cognome" placeholder="Cognome" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="date" name="data" required onChange={handleChange} />
            <input type="time" name="orario" required onChange={handleChange} />
            <Button type="submit">Prenota ora</Button>
            <button onClick={onClose} className="close-btn">Annulla</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default BookingModal
