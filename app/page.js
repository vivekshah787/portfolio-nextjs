'use client'

import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 991) {
      setSidebarOpen(false)
    }
  }

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button 
        className="sidebar-toggle" 
        id="sidebarToggle" 
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onLinkClick={closeSidebar} />

      {/* Main Content */}
      <main className={`main-content ${!sidebarOpen ? 'expanded' : ''}`}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  )
}
