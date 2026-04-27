import React, { useState } from 'react';
import './Navbar.css';
import { useTranslation } from 'react-i18';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('skills'), href: '#skills' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home" onClick={closeMenu}>{t("profile")}</a>
      </div>
      
      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        ☰
      </button>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <div className="lang-switch">
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button onClick={() => i18n.changeLanguage("ar")}>AR</button>
        </div>
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
