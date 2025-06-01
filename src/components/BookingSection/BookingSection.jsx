import { useState } from 'react'
import './BookingSection.css'
import BookingCard from './BookingCard/BookingCard'
import BookingModal from './BookingModal/BookingModal'

const bookingOptions = [
  {
    title: 'Visita Libera',
    description: 'Esplora la galleria al tuo ritmo, lasciandoti guidare dall’intuizione e dalla curiosità.',
    duration: 'Durata: Illimitata'
  },
  {
    title: 'Visita Guidata',
    description: 'Un percorso curato che svela i segreti e le storie dietro ogni opera d’arte.',
    duration: 'Durata: 90 minuti'
  }
]

function BookingSection() {
  const [selectedTitle, setSelectedTitle] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleOpenModal = (title) => {
    setSelectedTitle(title)
    setShowModal(true)
  }

  const handleFormSubmit = () => {
    setShowModal(false)
    setShowThankYou(true)
    setTimeout(() => setShowThankYou(false), 3000)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="booking-section">
      <h2>Prenota la Tua Visita</h2>
      <p className="booking-subtext">
        Immergiti in un’esperienza artistica unica. Ogni visita è un viaggio personale attraverso i capolavori che hanno ridefinito l’arte moderna.
      </p>

      <div className="booking-options">
        {bookingOptions.map((option, index) => (
          <BookingCard
            key={index}
            {...option}
            onClick={() => handleOpenModal(option.title)}
          />
        ))}
      </div>

      {showModal && (
        <BookingModal
          selectedTitle={selectedTitle}
          onClose={handleCloseModal}
          onSubmitSuccess={handleFormSubmit}
        />
      )}

      {showThankYou && (
        <div className="thank-you-message">
          Grazie per la tua prenotazione! Ti contatteremo via email.
        </div>
      )}
    </div>
  )
}

export default BookingSection