'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const portfolioItems = [
    { title: 'DocDoc', category: 'web ui', description: 'Healthcare platform with intuitive UI design', image: '/images/portfolio-img1.png' },
    { title: 'Spring Money', category: 'ui', description: 'Financial services platform redesign', image: '/images/portfolio-img2.png' },
    { title: 'Popdust', category: 'web branding', description: 'Entertainment news platform interface', image: '/images/portfolio-img6.png' },
    { title: 'Reece', category: 'ui web', description: 'E-commerce platform with modern UI', image: '/images/portfolio-img3.png' },
    { title: 'Trueself', category: 'ui', description: 'Personal development app interface', image: '/images/portfolio-img7.png' },
    { title: 'AdRoll', category: 'web', description: 'Marketing platform dashboard design', image: '/images/portfolio-img5.png' }
  ]

  const filters = ['all', 'web', 'ui', 'branding']

  const handleFilter = (filter) => {
    setActiveFilter(filter)
  }

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category.includes(activeFilter))

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-subtitle">My Work</p>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-description">
            Designing clarity, one pixel at a time. Turning ideas into intuitive experiences.
          </p>
        </div>

        <div className="portfolio-filter fade-in">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredItems.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="portfolio-item fade-in">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      width={600}
                      height={400}
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-links">
                        <a href="#" className="portfolio-link" title="View Details">
                          <i className="bi bi-eye"></i>
                        </a>
                        <a href="#" className="portfolio-link" title="External Link">
                          <i className="bi bi-link-45deg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <p className="portfolio-category">
                      {item.category.split(' ')[0].toUpperCase()}
                    </p>
                    <h3 className="portfolio-title">{item.title}</h3>
                    <p className="portfolio-description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
