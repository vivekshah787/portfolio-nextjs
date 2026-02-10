'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ['Sr. UI/UX Designer', 'Sr. Web Designer', 'Sr. Product Designer', 'AI-Enabled Frontend Engineer']

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 100)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, roles])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-content fade-in">
        <p className="hero-greeting">Hey, my name is</p>
        <h1 className="hero-name">Vivek Shah</h1>
        <p className="hero-tagline">
          I&apos;m a <span className="typing-effect">{text}</span>
        </p>

        <div className="hero-cta">
          <button onClick={() => scrollToSection('portfolio')} className="btn-primary-custom">
            View My Work
            <i className="bi bi-arrow-right"></i>
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn-outline-custom">
            <i className="bi bi-chat-dots"></i>
            Let&apos;s Talk
          </button>
        </div>

        <div className="hero-tech-stack">
          <div className="tech-icon" title="HTML5">
            <i className="bi bi-filetype-html"></i>
          </div>
          <div className="tech-icon" title="CSS3">
            <i className="bi bi-filetype-css"></i>
          </div>
          <div className="tech-icon" title="JavaScript">
            <i className="bi bi-filetype-js"></i>
          </div>
          <div className="tech-icon" title="Bootstrap">
            <i className="bi bi-bootstrap"></i>
          </div>
          <div className="tech-icon" title="Figma">
            <i className="bi bi-palette"></i>
          </div>
        </div>
      </div>
    </section>
  )
}
