'use client';
import { useEffect, useRef } from 'react';

const SKILLS = [
  { name: 'UI/UX Design', pct: 95 },
  { name: 'Figma / Adobe XD', pct: 92 },
  { name: 'HTML5 / CSS3', pct: 90 },
  { name: 'Bootstrap / SCSS', pct: 88 },
  { name: 'JavaScript / jQuery', pct: 80 },
  { name: 'Responsive Design', pct: 95 },
  { name: 'Design Systems', pct: 85 },
  { name: 'AI Tools (Midjourney, GPT)', pct: 78 },
];

const SERVICES = [
  { icon: 'bi-palette', title: 'UI/UX Design', desc: 'Research-backed design with user journeys, wireframes, prototypes and polished high-fidelity screens.' },
  { icon: 'bi-code-slash', title: 'Frontend Dev', desc: 'HTML5, CSS3, Bootstrap & SCSS — pixel-perfect, responsive, and cross-browser.' },
  { icon: 'bi-grid-1x2', title: 'Design Systems', desc: 'Scalable component libraries and style guides for consistent product experiences.' },
  { icon: 'bi-robot', title: 'AI-Powered Design', desc: 'Integrating Midjourney, ChatGPT, and emerging AI tools to accelerate creative workflows.' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fills = document.querySelectorAll<HTMLElement>('.skill-fill');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) fills.forEach((f) => f.classList.add('animated'));
      });
    }, { threshold: 0.3 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="skills-container">
        <div className="skills-header">
          <p className="section-label reveal" style={{ justifyContent: 'center' }}>My Expertise</p>
          <h2 className="section-title reveal reveal-delay-1">Skills &amp; <span>Services</span></h2>
        </div>

        <div className="skills-bars-grid">
          {SKILLS.map((s) => (
            <div className="skill-item reveal" key={s.name}>
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ '--target-width': `${s.pct}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="service-cards-grid">
          {SERVICES.map((s, i) => (
            <div className={`service-card reveal reveal-delay-${i + 1}`} key={s.title}>
              <div className="service-icon"><i className={`bi ${s.icon}`} /></div>
              <h5>{s.title}</h5>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
