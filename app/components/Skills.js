'use client'

import { useState, useEffect, useRef } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const skills = [
    { name: 'HTML5', icon: 'bi-filetype-html', percentage: 100 },
    { name: 'CSS3/SCSS', icon: 'bi-filetype-css', percentage: 100 },
    { name: 'Bootstrap', icon: 'bi-bootstrap', percentage: 100 },
    { name: 'Responsive Design', icon: 'bi bi-phone', percentage: 100 },
    { name: 'jQuery/JavaScript', icon: 'bi-filetype-js', percentage: 90 },
    { name: 'Figma/Adobe XD', icon: 'bi-palette', percentage: 60 },
    { name: 'Angular/React/Next JS (Basics)', icon: 'bi-code-slash', percentage: 50 },
    { name: 'AI Tools (ChatGPT, Copilot)', icon: 'bi bi-cpu', percentage: 95 }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-subtitle">What I Do Best</p>
          <h2 className="section-title">My Skills</h2>
          <p className="section-description">
            Designing clarity, one pixel at a time. Turning ideas into intuitive experiences.
          </p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="skill-card fade-in">
                <div className="skill-icon">
                  <i className={`bi ${skill.icon}`}></i>
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-progress">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                      aria-valuenow={skill.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="skill-percentage">{skill.percentage}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
