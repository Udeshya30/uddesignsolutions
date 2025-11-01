// src/pages/Contact.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/pages/_contact.scss'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // simulate sending (you’ll integrate with backend / email API later)
      await new Promise((r) => setTimeout(r, 1000))
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <main className="page-contact">
      <section className="contact-hero container">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Build Something Extraordinary
        </motion.h1>

        <motion.p
          className="contact-lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Ready to collaborate on your next project? Whether it’s a 3D showcase,
          AI integration, or immersive AR/VR experience — we’d love to hear from you.
        </motion.p>
      </section>

      <section className="contact-form-section container">
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-success">Message sent successfully! We’ll get back soon.</p>
          )}
          {status === 'error' && (
            <p className="form-error">Something went wrong. Please try again later.</p>
          )}
        </motion.form>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Contact Details</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@uddesign.io">hello@uddesign.io</a>
          </p>

          <div className="contact-social">
            <a
              href="https://www.linkedin.com/company/ud-design-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/uddesignsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://instagram.com/uddesignsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
