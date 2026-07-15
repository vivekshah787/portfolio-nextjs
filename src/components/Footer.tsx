export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <a href="#home" className="footer-logo">VS<span>.</span></a>
        <p>© {year} Vivek Shah. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/vivek-shah-587b96114/' },
            { icon: 'bi-facebook', href: 'https://www.facebook.com/vivek.shah.9461/' },
            { icon: 'bi-instagram', href: 'https://www.instagram.com/viky_the_fighter/' },
            { icon: 'bi-envelope', href: 'mailto:vivekshah061993@gmail.com' },
          ].map((s) => (
            <a key={s.icon} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--clr-border)', borderRadius: 8, color: 'var(--clr-muted)', textDecoration: 'none', fontSize: 15 }}>
              <i className={`bi ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
