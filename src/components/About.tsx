'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <Image src="https://vmshah.netlify.app/images/vs.png" alt="Vivek Shah" width={420} height={520} style={{ width: '100%', height: 'auto' }} />
            <div className="about-availability">
              <span className="availability-dot" />
              Available for Projects
            </div>
          </div>
          <div className="about-text">
            <p className="section-label reveal">About Me</p>
            <h2 className="section-title reveal reveal-delay-1">Crafting <span>Digital</span> Experiences</h2>
            <p className="reveal reveal-delay-2">I&apos;m <strong>Vivek Shah</strong>, a Senior UI/Product Designer &amp; Frontend Developer based in Ahmedabad, India with <strong>10+ years</strong> of experience turning complex ideas into elegant, user-centric digital products.</p>
            <p className="reveal reveal-delay-3">My expertise spans UI/UX design, responsive web development, design systems, and AI-powered tooling — across healthcare, fintech, e-commerce, and SaaS sectors.</p>
            <p className="reveal reveal-delay-4">Currently leading design at <strong>Cygnet Infotech</strong>, where I bridge business goals and user needs through research-backed design decisions and pixel-perfect interfaces.</p>
            <div className="about-info-grid reveal reveal-delay-3">
              {[
                { label: 'Location', value: 'Ahmedabad, Gujarat, India' },
                { label: 'Experience', value: '10+ Years' },
                { label: 'Current Role', value: 'Senior UI/Product Designer' },
                { label: 'Email', value: 'vivekshah061993@gmail.com' },
              ].map((item) => (
                <div className="about-info-item" key={item.label}>
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="reveal reveal-delay-4" style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://vmshah.netlify.app/images/Vivek_Shah_CV_Global.pdf" target="_blank" rel="noreferrer" className="btn-primary-custom">
                Download CV <i className="bi bi-download" />
              </a>
              <a href="#contact" className="btn-ghost-custom" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Hire Me <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
