import './GalleriaInfo.css'
import GalleriaSocial from './GalleriaSocial/GalleriaSocial'
import Button from '../Button/Button'

const GalleriaInfo = () => {
  return (
    <div className="galleria-info">
      <div className="galleria-info-inner">
        <div className="info-col branding">
          <h3>GALLERIA</h3>
          <p>
            Vivi l’arte in uno spazio dove ogni opera racconta una storia unica e trasformativa.
          </p>
          <GalleriaSocial></GalleriaSocial>
        </div>

        <div className="info-col">
          <h4>Visitaci</h4>
          <address>
            Via dell’Arte 123
            Milano, 20121
          </address>
          <div className="info-block">
            <strong>Orari</strong>
            <p>Mer - Dom<br />11:00 - 18:00</p>
          </div>
          <div className="info-block">
            <strong>Contatti</strong>
            <p>info@galleria.it<br />+39 02 1234 5678</p>
          </div>
        </div>

        <div className="info-col">
          <h4>Newsletter</h4>
          <p>Iscriviti per ricevere aggiornamenti su nuove esposizioni ed eventi speciali.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Inserisci la tua email" />
            <Button onClick={() => console.log('Clicked!')}>Iscriviti</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GalleriaInfo
