import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home" onClick={closeMenu}>profile</a>
      </div>
      
      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={closeMenu}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
