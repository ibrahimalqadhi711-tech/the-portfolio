import React from 'react';
import './Footer.css';
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          
          <a href="https://github.com/ibrahimalqadhi711@gmail.com" target="_blank"
          rel="noopener noreferrer"
>
          <FaGithub />
          </a>

          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          
          <a 
            href="https://instagram.com/ibra.hi6704"
            target="_blank" 
            rel="noopener noreferrer"
>
            <FaInstagram />
          </a>

          <a 
            href="https://wa.me/967781324246" 
            target="_blank"
            rel="noopener noreferrer"
>
          <FaWhatsapp />
          </a>

        </div>
        <p className="copyright">
          &copy; 2026 Ibrahim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
