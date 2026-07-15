'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('vm-theme');
    const init = saved || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
    setTheme(init as 'light' | 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('vm-theme', next);
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    const sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'contact'];
    let current = 'home';
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (href: string) => {
    closeMenu();
    setTimeout(() => {
      const id = href.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>VS<span>.</span></a>

          {/* Desktop */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <ul className="nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={active === l.href.replace('#', '') ? 'active' : ''}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                  >{l.label}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://vivekshah.netlify.app/images/Vivek_Shah_Sr_Product_Designer_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-btn-link"
                  style={{ marginLeft: 8 }}
                >Download CV</a>
              </li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <div className="theme-toggle-thumb">
                {theme === 'light' ? '☀️' : '🌙'}
              </div>
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className={`burger-btn${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="burger-lines">
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </div>
            <span className="burger-label">{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`mob-backdrop${menuOpen ? ' is-open' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-bg" />
        <div className="mobile-menu-strip" />
        <div className="mobile-menu-inner">
          <div className="mob-header">
            <a href="#home" className="mob-header-logo" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>
              VM<span style={{ color: 'var(--clr-accent)' }}>.</span>
            </a>
            <div className="mob-header-badge">
              <span className="mob-badge-dot" />
              Available
            </div>
          </div>

          <div className="mob-nav-section">
            <div className="mob-nav-label">Navigation</div>
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((l, i) => (
                <li key={l.href} className="mobile-nav-item">
                  <a
                    href={l.href}
                    className={`mobile-nav-link${active === l.href.replace('#', '') ? ' active' : ''}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                  >
                    <span className="mob-link-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="mobile-nav-text">{l.label}</span>
                    <span className="mob-link-arrow"><i className="bi bi-arrow-right" /></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-menu-footer">
            <a
              href="https://vivekshah.netlify.app/images/Vivek_Shah_Sr_Product_Designer_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="mobile-cv-btn"
            >
              Download CV <i className="bi bi-download" />
            </a>
            <div className="mobile-menu-socials">
              <a href="https://www.linkedin.com/in/vivek-shah-587b96114/" target="_blank" rel="noreferrer" className="mobile-social-link"><i className="bi bi-linkedin" /></a>
              <a href="https://www.facebook.com/vivek.shah.9461/" target="_blank" rel="noreferrer" className="mobile-social-link"><i className="bi bi-facebook" /></a>
              <a href="https://www.instagram.com/viky_the_fighter/" target="_blank" rel="noreferrer" className="mobile-social-link"><i className="bi bi-instagram" /></a>
              <a href="mailto:vivekshah061993@gmail.com" className="mobile-social-link"><i className="bi bi-envelope" /></a>
            </div>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--clr-border)', paddingTop: 16 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--clr-muted)' }}>
                {theme === 'light' ? '☀️' : '🌙'} Theme
              </span>
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <div className="theme-toggle-thumb">{theme === 'light' ? '☀️' : '🌙'}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
