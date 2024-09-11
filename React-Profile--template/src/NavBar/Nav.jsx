import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faBehance, faLinkedin, faSketch, faGithub } from '@fortawesome/free-brands-svg-icons';
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
            <a>My React Profile</a>
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
            <a href="https://github.com">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
