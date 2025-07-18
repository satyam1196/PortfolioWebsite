
import './App.css';
import Resume from './components/Resume';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <main>
      <header className="main-header">
        <h1>Satyam Thakur</h1>
        <p>Software Engineer | React Specialist | Cloud Enthusiast</p>
        <nav>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <Resume />
      <Projects />
      <TechStack />
      <Testimonials />
      <Blog />
      <Contact />
      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} Satyam Thakur. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
