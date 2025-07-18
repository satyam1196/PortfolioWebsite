import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would integrate with a backend or service like Formspree
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      {submitted ? (
        <p>Thank you for reaching out! I will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} required />

          <button type="submit" className="btn">Send Message</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
