import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          React App
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="nav-link">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/contato" className="nav-link">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

