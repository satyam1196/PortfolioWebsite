import React from 'react';

const projects = [
  {
    title: 'AI-Powered Portfolio Website',
    description: 'A modern, recruiter-friendly portfolio built with React, Vite, and cloud deployment. Features advanced sections and accessibility best practices.',
    link: '#',
    tech: ['React', 'Vite', 'Netlify', 'Accessibility']
  },
  {
    title: 'Real-Time Chat App',
    description: 'A scalable chat application using Node.js, Socket.io, and MongoDB. Includes authentication and responsive UI.',
    link: '#',
    tech: ['Node.js', 'Socket.io', 'MongoDB']
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Analytics dashboard for e-commerce platforms with data visualization and cloud integration.',
    link: '#',
    tech: ['React', 'Chart.js', 'AWS']
  }
];

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div key={idx} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.tech.join(', ')}</p>
          {project.link !== '#' && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
