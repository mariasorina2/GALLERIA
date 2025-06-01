import Button from "../../Button/Button"

function BookingCard({ title, description, duration, onClick }) {
  return (
    <div className="booking-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{duration}</span>
       <Button onClick={onClick}>Prenota ora</Button>
    </div>
  )
}

export default BookingCard
