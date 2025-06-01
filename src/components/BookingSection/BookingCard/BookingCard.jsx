import Button from "../../Button/Button"

function BookingCard({ title, description, duration }) {
  return (
    <div className="booking-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{duration}</span>
       <Button onClick={() => console.log(`Prenotato: ${title}`)}>Prenota ora</Button>
    </div>
  )
}

export default BookingCard
