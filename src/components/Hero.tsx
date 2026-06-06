'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const PHRASES = [
  'Senior UI/Product Designer',
  'Frontend Developer',
  'AI-Powered Builder',
  'SaaS & Enterprise UX Specialist',
];

const TICKER_ITEMS = [
  'HTML5 / CSS3', 'Bootstrap 5', 'SCSS / LESS', 'Figma', 'Adobe XD',
  'jQuery', 'Responsive Design', 'AI Tools', 'UI/UX Design', 'Frontend Dev',
];

export default function Hero() {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let pi = 0, ci = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const current = PHRASES[pi];
      if (!deleting) {
        setTyped(current.slice(0, ci++));
        if (ci > current.length) { deleting = true; timer = setTimeout(type, 1800); return; }
      } else {
        setTyped(current.slice(0, ci--));
        if (ci < 0) { deleting = false; pi = (pi + 1) % PHRASES.length; ci = 0; timer = setTimeout(type, 400); return; }
      }
      timer = setTimeout(type, deleting ? 45 : 85);
    }
    timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, []);

  const tickerItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section id="home">
      {/* Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* Floating shapes */}
      <div className="shape shape-1">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="40,4 76,72 4,72" fill="none" stroke="#F0A500" strokeWidth="1.5" />
          <polygon points="40,16 64,64 16,64" fill="rgba(240,165,0,0.15)" />
        </svg>
      </div>
      <div className="shape shape-2">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="28" stroke="#0EA5E9" strokeWidth="1.5" fill="rgba(14,165,233,0.12)" />
          <circle cx="30" cy="30" r="18" stroke="#0EA5E9" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      <div className="shape shape-3">
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="42" height="42" rx="6" stroke="#10B981" strokeWidth="1.5" fill="rgba(16,185,129,0.12)" transform="rotate(15 25 25)" />
        </svg>
      </div>
      <div className="shape shape-4">
        <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="37" height="37" stroke="#FFD23C" strokeWidth="1.5" fill="rgba(255,210,60,0.12)" />
        </svg>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left */}
          <div>
            <div className="hero-eyebrow reveal">
              <span className="dot" />
              Available for Freelance &amp; Full-Time
            </div>

            <h1 className="hero-title">
              <span className="line"><span className="line-inner" style={{ '--d': '0.15s' } as React.CSSProperties}>Vivek</span></span>
              <span className="line"><span className="line-inner accent-outline" style={{ '--d': '0.3s' } as React.CSSProperties}>Shah</span></span>
            </h1>

            <p className="hero-typing reveal reveal-delay-2">
              I&apos;m a&nbsp;<span className="typed-text">{typed}</span><span className="cursor-blink" />
            </p>

            <div className="hero-ctas reveal reveal-delay-3">
              <a href="#portfolio" className="btn-primary-custom" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View My Work <i className="bi bi-arrow-right" />
              </a>
              <a href="#contact" className="btn-ghost-custom" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Let&apos;s Talk <i className="bi bi-chat-square" />
              </a>
            </div>

            <div className="hero-stats reveal reveal-delay-4">
              <div className="hero-stat">
                <div className="hero-stat-num">10<span>+</span></div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">50<span>+</span></div>
                <div className="hero-stat-label">Projects Delivered</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">6<span>+</span></div>
                <div className="hero-stat-label">Years at Cygnet</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="reveal reveal-delay-2">
            <div className="hero-img-card">
              <Image
                src="https://vmshah.netlify.app/images/vs2.jpg"
                alt="Vivek Shah"
                width={500}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
              <div className="hero-img-overlay" />
              <div className="hero-img-badge">
                <strong>Vivek Shah</strong>
                <small>Senior UI/Product Designer</small>
              </div>
            </div>
            <div className="social-links" style={{ marginTop: 12, justifyContent: 'center' }}>
              <a href="https://www.linkedin.com/in/vivek-shah-587b96114/" target="_blank" rel="noreferrer" className="social-link"><i className="bi bi-linkedin" /></a>
              <a href="https://www.facebook.com/vivek.shah.9461/" target="_blank" rel="noreferrer" className="social-link"><i className="bi bi-facebook" /></a>
              <a href="https://www.instagram.com/viky_the_fighter/" target="_blank" rel="noreferrer" className="social-link"><i className="bi bi-instagram" /></a>
              <a href="mailto:vivekshah061993@gmail.com" className="social-link"><i className="bi bi-envelope" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="hero-ticker-wrap">
        <div className="hero-ticker">
          {tickerItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
