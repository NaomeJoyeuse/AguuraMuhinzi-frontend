import React, { useState } from "react";
import Ico_Plant from "../asesst/Icons/Ico_plant.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, section) => {
    e.preventDefault();
    navigate('/'); // Navigate to the main page

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Element with id ${section} not found`);
      }
    }, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ width: '100%', backgroundColor: 'transparent', marginTop: '-70px' }}>
      <div className="container-fluid">
        <div className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
          <Ico_Plant width="35" height="35" />
          <span className="navbar-brand" style={{ fontWeight: '600', fontSize: '1.5rem' }}>AguuraMuhinzi</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontWeight: '700', color: 'white', fontSize: '1.2rem' }}>Home</Link>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#Services" 
                style={{ fontWeight: '700', color: 'white', fontSize: '1.2rem' }} 
                onClick={(e) => handleScroll(e, 'Services')}
              >
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ fontWeight: '700', color: 'white', fontSize: '1.2rem' }}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ fontWeight: '700', color: 'white', fontSize: '1.2rem' }}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
