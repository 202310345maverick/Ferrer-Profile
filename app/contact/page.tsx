'use client'
import { useState, ChangeEvent, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    // Reset submission status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Get In Touch</h1>
        <p>Let's connect! I'm always open to discussing frontend projects, internships, and collaboration opportunities.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-item">
            <h3>Email</h3>
            <p>202310219@gordoncollege.edu.ph</p>
          </div>
          <div className="contact-item">
            <h3>Location</h3>
            <p>Olongapo City, Philippines</p>
            <p className="location-note">Gordon College Student</p>
          </div>
          <div className="contact-item">
            <h3>Academic Focus</h3>
            <p>BS Information Technology</p>
            <p>Frontend Development</p>
          </div>
          <div className="contact-item">
            <h3>Connect With Me</h3>
            <div className="social-links-mini">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-intro">
            <h3>Let's Work Together</h3>
            <p>I'm interested in frontend development opportunities, academic collaborations, and tech discussions. Whether you have a project idea or just want to chat about technology, feel free to reach out!</p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, internship opportunity, or just say hello!"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>

            {isSubmitted && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent. I'll get back to you soon!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}