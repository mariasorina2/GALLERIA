import './BookingSection.css'
import BookingCard from './BookingCard/BookingCard'
import Button from '../Button/Button'

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
  return (
    <div className="booking-section">
      <h2>Prenota la Tua Visita</h2>
      <p className="booking-subtext">
        Immergiti in un’esperienza artistica unica. Ogni visita è un viaggio personale attraverso i capolavori che hanno ridefinito l’arte moderna.
      </p>

      <div className="booking-options">
        {bookingOptions.map((option, index) => (
          <BookingCard key={index} {...option} />
        ))}
      </div>

    </div>
  )
}

export default BookingSection
