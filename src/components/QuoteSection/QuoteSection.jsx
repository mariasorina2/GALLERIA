import './QuoteSection.css'

function QuoteSection() {
  return (
    <section className="quote-section">
      <h2>Una Citazione per Riflettere</h2>
      <div className="quote-divider" />
      <blockquote>
        <p>"L'arte non riproduce ciò che è visibile, ma rende visibile ciò che non sempre lo è."</p>
        <cite>— Paul Klee</cite>
      </blockquote>
    </section>
  )
}

export default QuoteSection
