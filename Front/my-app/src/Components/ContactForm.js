import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_2qlvc7f', 'template_ubz8q3k', formState, 'Va5vB_rrsk3v6zZBR')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message, please try again.');
      });

    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-form-container">
      <div className="contact-card">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" name="name" value={formState.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input type="email" name="email" value={formState.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea name="message" value={formState.message} onChange={handleChange} required />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
