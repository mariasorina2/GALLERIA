import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <img src="/GalleriaLogo.png" alt="Logo Galleria" />
      </div>

      <div className="footer-bottom-bar">
        <p>© 2025 Galleria. Tutti i diritti riservati.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Termini di Servizio</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
