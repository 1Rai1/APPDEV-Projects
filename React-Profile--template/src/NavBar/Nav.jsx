import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faBehance, faLinkedin, faSketch } from '@fortawesome/free-brands-svg-icons';
export default function NavBar() {
  return (   
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img id="cat" src="cat.webp" height="100" width="100" alt="logo-svg" />
          <button className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* Links */}
        <ul className="links show-links">
          <li>
            <a href="http://127.0.0.1:5500/Counter/index1.html">Counter</a>
          </li>
          <li>
            <a href="http://127.0.0.1:5500/Color%20Picker/index.html">Color Picker</a>
          </li>
          <li>
            <a href="http://127.0.0.1:5500/Quote%20Generator/index.html">Quotes Generator</a>
          </li>
        </ul>
        {/* Social Media Links */}
        <ul className="social-icons">
          <li>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://behance.com">
              <FontAwesomeIcon icon={faBehance} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://sketch.com">
              <FontAwesomeIcon icon={faSketch} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
