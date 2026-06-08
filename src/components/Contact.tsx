'use client';
import { useState, FormEvent } from 'react';

type Status = { type: 'idle' | 'sending' | 'success' | 'error'; msg: string };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>({ type: 'idle', msg: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'sending', msg: 'Sending your message…' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', msg: '✅ Message sent! I\'ll reply within 24–48 hours.' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Network error. Please email me directly at vivekshah061993@gmail.com' });
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="section-label reveal" style={{ justifyContent: 'center' }}>Get In Touch</p>
          <h2 className="section-title reveal reveal-delay-1">Let&apos;s <span>Work Together</span></h2>
          <p className="reveal reveal-delay-2" style={{ color: 'var(--clr-muted)', maxWidth: 520, margin: '0 auto' }}>
            Have a project in mind or just want to say hello? Drop me a message and I&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info cards */}
          <div className="contact-cards">
            {[
              { icon: 'bi-envelope', label: 'Email', value: 'vivekshah061993@gmail.com', href: 'mailto:vivekshah061993@gmail.com' },
              { icon: 'bi-telephone', label: 'Phone', value: '+91 99247 45782', href: 'tel:+91 9924745782' },
              { icon: 'bi-geo-alt', label: 'Location', value: 'Ahmedabad, Gujarat, India', href: null },
              { icon: 'bi-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/vivek-shah', href: 'https://www.linkedin.com/in/vivek-shah-587b96114/' },
            ].map((card) => (
              <div className="contact-card reveal" key={card.label}>
                <div className="contact-icon"><i className={`bi ${card.icon}`} /></div>
                <div className="contact-info">
                  <h6>{card.label}</h6>
                  {card.href ? (
                    <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{card.value}</a>
                  ) : (
                    <p>{card.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal reveal-delay-2">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div>
                  <label className="form-label-custom" htmlFor="name">Full Name *</label>
                  <input
                    className="form-control-custom"
                    id="name" name="name" type="text"
                    placeholder="John Doe"
                    value={form.name} onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="form-label-custom" htmlFor="email">Email Address *</label>
                  <input
                    className="form-control-custom"
                    id="email" name="email" type="email"
                    placeholder="john@example.com"
                    value={form.email} onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label-custom" htmlFor="subject">Subject</label>
                <input
                  className="form-control-custom"
                  id="subject" name="subject" type="text"
                  placeholder="Project enquiry / Freelance work / Say hello"
                  value={form.subject} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label-custom" htmlFor="message">Message *</label>
                <textarea
                  className="form-control-custom"
                  id="message" name="message"
                  rows={6}
                  placeholder="Tell me about your project, timeline, budget…"
                  value={form.message} onChange={handleChange}
                  required
                />
              </div>

              {status.type !== 'idle' && (
                <div className={`form-status ${status.type}`}>{status.msg}</div>
              )}

              <div style={{ marginTop: 24 }}>
                <button
                  type="submit"
                  className="btn-primary-custom"
                  disabled={status.type === 'sending'}
                  style={{ opacity: status.type === 'sending' ? 0.7 : 1, cursor: status.type === 'sending' ? 'not-allowed' : 'pointer' }}
                >
                  {status.type === 'sending' ? (
                    <><i className="bi bi-arrow-repeat" style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }} /> Sending…</>
                  ) : (
                    <>Send Message <i className="bi bi-send" /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
