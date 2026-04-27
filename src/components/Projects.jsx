import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce web application featuring user authentication, product search, shopping cart functionality, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveDemoLink: '#'
  },
  {
    title: 'Task Management Dashboard',
    description: 'An interactive productivity dashboard allowing users to manage tasks, track progress visually, and organize their workflow efficiently.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    liveDemoLink: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive, modern personal portfolio website built to showcase web development projects and skills with a minimalist aesthetic.',
    technologies: ['React', 'CSS3', 'Vite'],
    liveDemoLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2 className="section-title">Projects (In Progress)</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <ul className="project-tech-list">
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-actions">
              <a href={project.liveDemoLink} className="button button-outline project-button" target="_blank" rel="noopener noreferrer">
                Live Demo Is Coming Soon
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
