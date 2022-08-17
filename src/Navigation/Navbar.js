import React from 'react';
import{Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>

<header className="d-flex flex-wrap justify-content-center py-3 mb-0">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <h1>Portfolio</h1>
        </a>
  
        <ul className="nav nav-pills">
          <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
          <li className="nav-item"><Link to="./about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="./skills" className="nav-link">Skills</Link></li>
          <li className="nav-item"><Link to="./services" className="nav-link">Services</Link></li>
          <li className="nav-item"><Link to="./contact" className="nav-link">Contact</Link></li>
          </ul>
      </header>
        </div>
  )
}

export default Navbar