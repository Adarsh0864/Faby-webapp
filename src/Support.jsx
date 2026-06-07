import React, { useState, useEffect } from 'react';
import './Support.css';

export default function Support() {
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    formData.append("access_key", "1fcbc78c-a7b6-47f8-9c8f-96079619327e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setStatus('error');
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setStatus('error');
    }
  };

  return (
    <div className="support-page">
      <div className="support-container">
        <h1>Contact Support</h1>
        <p className="support-subtitle">
          Have an issue or a suggestion? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {status === 'success' && (
          <div className="alert success">
            ✅ Thank you! Your message has been sent successfully. We will be in touch soon.
          </div>
        )}

        {status === 'error' && (
          <div className="alert error">
            ❌ Oops! Something went wrong while sending your message. Please try again later.
          </div>
        )}

        <form className="support-form" onSubmit={handleSubmit}>
          {/* Honeypot to prevent spam */}
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="e.g. Jane Doe" 
              required 
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="e.g. jane@example.com" 
              required 
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Issue or Suggestion</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              placeholder="How can we help you?" 
              required
              disabled={status === 'loading'}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn-submit" 
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
