'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Sidebar({ isOpen, onLinkClick }) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section, .hero-section')
      let current = ''

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.pageYOffset >= (sectionTop - 200)) {
          current = section.getAttribute('id')
        }
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    onLinkClick()
  }

  return (
    <aside className={`sidebar ${isOpen ? 'show' : 'collapsed'}`} id="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Image 
            src="/images/vs2.jpg" 
            alt="Vivek Shah" 
            width={120}
            height={120}
          />
        </div>
        <h2 className="sidebar-name">Vivek Shah</h2>
        <p className="sidebar-title">Senior UI/UX Designer</p>
      </div>

      <nav>
        <ul className="nav-menu">
          <li className="nav-item">
            <div
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              <i className="bi bi-house-door"></i>
              <span>Home</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              <i className="bi bi-person"></i>
              <span>About</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              <i className="bi bi-gear"></i>
              <span>Skills</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              <i className="bi bi-briefcase"></i>
              <span>Experience</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={() => scrollToSection('portfolio')}
            >
              <i className="bi bi-grid"></i>
              <span>Portfolio</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </div>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/vivek-shah-587b96114/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          {/* <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a> */}
          <a href="https://www.facebook.com/vivek.shah.9461/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/viky_the_fighter/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <a href="/images/Vivek_Shah_Product_Designer.pdf" target="_blank" className="download-cv">
          <i className="bi bi-download"></i>
          Download CV
        </a>
      </div>
    </aside>
  )
}
