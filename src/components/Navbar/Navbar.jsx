import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/GalleriaLogo.png" alt="Logo Galleria" />
          <span>GALLERIA</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/renè-magritte">Renè Magritte</NavLink></li>
        <li><NavLink to="/esposizioni">Esposizioni</NavLink></li>
        <li><NavLink to="/artisti">Artisti</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
