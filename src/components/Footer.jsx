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
          
          <a href="https://github.com/ibrahimalqadhi711-tech/the-portfolio" target="_blank"
          rel="noopener noreferrer"
>
          <FaGithub />
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
