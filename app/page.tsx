'use client'
import { useState } from 'react'

export default function Home() {
  const [textColor, setTextColor] = useState('#333333')
  const [clickCount, setClickCount] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const handleFunButtonClick = () => {
    setClickCount(prev => prev + 1)

    // Change text color randomly
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setTextColor(randomColor)

    // Show modal
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="container">
      <div className="hero-section">
        <div className="profile-image-container">
          <div className="profile-image">
            <img
              src="/profile-pic.jpg"
              alt="Shanelle C. Ferrer"
              className="profile-picture"
            />
          </div>
        </div>

        <div className="profile-content">
          <h1 className="name" style={{ color: textColor }}>
            Shanelle C. Ferrer
          </h1>
          <p className="title">Frontend Developer</p>

          <div className="bio">
            <p>
              Creative Frontend Developer passionate about building responsive and 
              user-friendly web applications. Currently exploring modern technologies 
              like React, Next.js, and TypeScript. Enthusiastic about creating 
              intuitive user interfaces and continuously learning new skills in 
              frontend development.
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>Twitter</span>
            </a>
          </div>

          <div className="interactive-section">
            <button
              onClick={handleFunButtonClick}
              className="fun-button"
            >
              Click for Fun! ({clickCount})
            </button>
            <p className="hint">Try clicking multiple times!</p>
          </div>
        </div>
      </div>

      {/* Modal - Only shows Shrek GIF */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src="/shrek.gif"
              alt="Shrek"
              className="shrek-gif"
            />
          </div>
        </div>
      )}
    </div>
  )
}