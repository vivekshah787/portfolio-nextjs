'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CaseStudyNav() {
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

  return (
    <nav className="cs-nav">
      <div className="cs-nav-inner">
        <Link href="/" className="cs-logo">VS<span>.</span></Link>
        <div className="cs-nav-right">
          <Link href="/#portfolio" className="cs-nav-back"><i className="bi bi-arrow-left" /> Back to Portfolio</Link>
          <button className="cs-theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
            <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon-stars'}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
