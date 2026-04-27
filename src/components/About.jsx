import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! My name is Ibrahim Alqadhi and I enjoy creating engaging things that live on the internet. As a frontend developer, I am deeply passionate about bridging the gap between elegant design and seamless functionality.
          </p>
          <p>
            With a strong foundation in modern web development, I specialize in building responsive, accessible, and user-centric applications. Working extensively with technologies like <strong>JavaScript (ES6+)</strong> and <strong>React</strong> allows me to engineer component-driven architectures that are both scalable and easy to maintain.
          </p>
          <p>
            Whether I am implementing complex application logic, optimizing performance, or collaborating with designers to perfect an interface, I prioritize clean code and a superior user experience. I'm always eager to learn new technologies and embrace the constant evolution of the web.
          </p>
          <p>
            - TOEFL Certified (English Proficiency)
            - Built projects using React
            - Strong passion for learning and development
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
