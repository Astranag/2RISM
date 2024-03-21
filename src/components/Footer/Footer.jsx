import React from 'react'
import CardFooter from 'react-bootstrap/CardFooter'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './footer.css'

function Footer() {
    return (
      <>
          <CardFooter className="footer--pin bg-warning">
          <div className="footer-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={24} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.example.com/ig"
            className="footer-icon-link"
            >
            <FaInstagram />
            </a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} 2RISM. All rights reserved.
        </div>
          </CardFooter>
      </>
    )
  }

export default Footer;