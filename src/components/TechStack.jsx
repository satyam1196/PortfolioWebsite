import React from 'react';

const techStack = [
  'React', 'Redux', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Azure', 'Docker', 'CI/CD', 'Jest', 'Accessibility', 'Performance Optimization'
];

const TechStack = () => (
  <section id="tech-stack" className="section">
    <h2>Tech Stack</h2>
    <ul className="tech-list">
      {techStack.map((tech, idx) => (
        <li key={idx}>{tech}</li>
      ))}
    </ul>
  </section>
);

export default TechStack;
