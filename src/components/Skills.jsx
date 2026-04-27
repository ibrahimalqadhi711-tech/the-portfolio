import React from 'react';
import './Skills.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Fast typing',
  'Work under pressure',
  'Communication skills'
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <span className="skill-name">{skill}</span>
            <div className="skill-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
