import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Engineering Manager',
    quote: 'Satyam consistently delivers high-quality work and is a pleasure to collaborate with. His technical skills and attention to detail are outstanding.'
  },
  {
    name: 'John Smith',
    role: 'Senior Developer',
    quote: 'A proactive problem solver who always goes the extra mile. Highly recommended for any advanced web development project.'
  }
];

const Testimonials = () => (
  <section id="testimonials" className="section">
    <h2>Testimonials</h2>
    <div className="testimonials-list">
      {testimonials.map((t, idx) => (
        <blockquote key={idx} className="testimonial">
          <p>"{t.quote}"</p>
          <footer>- {t.name}, {t.role}</footer>
        </blockquote>
      ))}
    </div>
  </section>
);

export default Testimonials;
