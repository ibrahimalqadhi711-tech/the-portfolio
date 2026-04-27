import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Ibrahim.</h1>
        <h2 className="hero-title">I'm a Frontend Developer.</h2>
        <p className="hero-description">
          I specialize in building (and occasionally designing) exceptional, high-quality digital experiences. I focus on creating highly responsive, accessible, and user-friendly web applications.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">View Projects</a>
          <a href="#contact" className="button button-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
