import React from 'react';

const Resume = () => (
  <section id="resume" className="section">
    <h2>Resume</h2>
    <p>Download my resume as PDF:</p>
    <a href="/Satyam_Thakur_Resume.pdf" download className="btn">Download Resume</a>
    <div className="resume-details">
      {/* Add ATS-friendly summary, experience, education, and skills here */}
      <h3>Professional Summary</h3>
      <p>Results-driven Software Engineer with expertise in React, Node.js, and cloud technologies. Proven track record in delivering scalable web applications and collaborating in cross-functional teams.</p>
      <h3>Experience</h3>
      <ul>
        <li><strong>Software Engineer</strong> – ABC Corp (2022–Present)<br/>Developed modern web apps using React, optimized performance, and led migration to cloud infrastructure.</li>
        <li><strong>Frontend Developer</strong> – XYZ Ltd (2020–2022)<br/>Built responsive UIs, improved accessibility, and implemented CI/CD pipelines.</li>
      </ul>
      <h3>Education</h3>
      <ul>
        <li>B.Tech in Computer Science – Top University (2016–2020)</li>
      </ul>
      <h3>Skills</h3>
      <ul>
        <li>React, Redux, TypeScript, Node.js, Express</li>
        <li>Cloud: AWS, Azure</li>
        <li>CI/CD, Docker, Git, Agile</li>
        <li>Accessibility, Performance Optimization</li>
      </ul>
    </div>
  </section>
);

export default Resume;
