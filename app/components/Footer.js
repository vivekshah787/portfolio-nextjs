'use client'

export default function Footer() {
  const socialLinks = [
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/vivek-shah-587b96114/', label: 'LinkedIn' },
    // { icon: 'bi-github', url: 'https://github.com', label: 'GitHub' },
    { icon: 'bi-facebook', url: 'https://www.facebook.com/vivek.shah.9461/', label: 'Facebook' },
    { icon: 'bi-instagram', url: 'https://www.instagram.com/viky_the_fighter/', label: 'Instagram' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <i className={`bi ${link.icon}`}></i>
              </a>
            ))}
          </div>
          <p className="footer-text">
            &copy; 2025 <a href="https://vivekshah.online/">Vivek Shah</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
