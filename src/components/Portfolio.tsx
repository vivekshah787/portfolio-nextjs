'use client';
import { useState, useRef, useEffect, useCallback } from 'react';

const PROJECTS = [
  { num: '01', name: 'DocDoc', tagline: 'Healthcare booking platform — end-to-end patient journey redesign', tags: ['SaaS', 'Healthcare', 'UI/UX'], year: '2023', cat: 'web saas', url: 'https://www.docdoc.com/', img: 'https://vivekshah.netlify.app/images/portfolio-img1.png' },
  { num: '02', name: 'Spring Money', tagline: 'Fintech platform — investment dashboards & onboarding flows', tags: ['SaaS', 'Fintech', 'Dashboard'], year: '2023', cat: 'web saas', url: 'https://spring.money/', img: 'https://vivekshah.netlify.app/images/portfolio-img2.png' },
  { num: '03', name: 'AdRoll', tagline: 'Marketing attribution platform — complex analytics made intuitive', tags: ['Web', 'Analytics', 'Marketing'], year: '2022', cat: 'web saas', url: 'https://www.adroll.com/home-b', img: 'https://vivekshah.netlify.app/images/portfolio-img5.png' },
  { num: '04', name: 'Reece Safety', tagline: 'B2B e-commerce — product catalogue & procurement UX', tags: ['E-Commerce', 'B2B'], year: '2022', cat: 'web ecommerce', url: 'https://www.reecesafety.com/', img: 'https://vivekshah.netlify.app/images/portfolio-img3.png' },
  { num: '05', name: 'Popdust', tagline: 'Entertainment media — high-velocity editorial UI system', tags: ['Editorial', 'Branding'], year: '2021', cat: 'web branding', url: 'https://www.popdust.com/', img: 'https://vivekshah.netlify.app/images/portfolio-img6.png' },
  { num: '06', name: 'Trueself', tagline: 'Wellness & personal development — calm, trust-first visual identity', tags: ['Wellness', 'Branding'], year: '2021', cat: 'web branding', url: 'https://www.trueself.com/', img: 'https://vivekshah.netlify.app/images/portfolio-img7.png' },
  { num: '07', name: 'Reggiocase', tagline: 'Italian real estate portal — property search & agent experience', tags: ['Real Estate', 'Web'], year: '2020', cat: 'web', url: 'https://www.reggiocase.it/', img: 'https://vivekshah.netlify.app/images/portfolio-img4.png' },
];

const FILTERS = ['all', 'web', 'saas', 'ecommerce', 'branding'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [preview, setPreview] = useState<{ src: string; label: string; top: number; left: number; show: boolean }>({ src: '', label: '', top: -9999, left: -9999, show: false });
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const filtered = PROJECTS.filter((p) => activeFilter === 'all' || p.cat.includes(activeFilter));

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    const thumb = thumbRef.current;
    if (!el || !thumb) return;
    const isScrollable = el.scrollHeight > el.clientHeight + 4;
    setScrollable(isScrollable);
    setAtTop(el.scrollTop <= 0);
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 2);
    if (isScrollable) {
      const ratio = el.clientHeight / el.scrollHeight;
      const h = Math.max(32, ratio * el.clientHeight);
      const top = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * (el.clientHeight - h);
      thumb.style.height = h + 'px';
      thumb.style.top = top + 'px';
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => { el.removeEventListener('scroll', updateScroll); window.removeEventListener('resize', updateScroll); };
  }, [filtered.length, updateScroll]);

  const handleRowEnter = (e: React.MouseEvent<HTMLAnchorElement>, p: typeof PROJECTS[0]) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const PW = 340, PH = 226, margin = 16;
    const rowMidY = rect.top + rect.height / 2;
    let top = Math.max(margin, Math.min(rowMidY - PH / 2, window.innerHeight - PH - margin));
    const listR = listRef.current?.getBoundingClientRect();
    let left = listR ? (window.innerWidth - listR.right >= PW + 24 ? listR.right + 20 : listR.left >= PW + 24 ? listR.left - PW - 20 : window.innerWidth - PW - margin) : window.innerWidth - PW - margin;
    setPreview({ src: p.img, label: p.name, top, left, show: true });
  };

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        {/* Header */}
        <div className="pf-header">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="pf-title">Work that<br /><span>speaks for itself.</span></h2>
            <p className="pf-desc">10+ years of crafting digital products across healthcare, finance, e-commerce, and media — built with purpose, refined through research.</p>
          </div>
          <div className="pf-meta">
            <div>
              <div className="pf-bignum">7<sub>+</sub></div>
              <div className="pf-meta-lbl">Case Studies</div>
            </div>
            <div className="avail-pill"><span className="avail-dot" />Available for work</div>
          </div>
        </div>

        {/* Filters */}
        <div className="pf-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`pf-filter${activeFilter === f ? ' on' : ''}`}
              onClick={() => { setActiveFilter(f); scrollRef.current?.scrollTo({ top: 0 }); }}
            >
              {f === 'all' ? 'All Projects' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* List */}
        <div className={`pf-scroll-wrap${scrollable ? ' has-more' : ''}${atBottom ? ' at-bottom' : ''}`} ref={wrapRef}>
          <div className="pf-scrollbar-track"><div className="pf-scrollbar-thumb" ref={thumbRef} /></div>
          <div className="pf-list-scroll" ref={scrollRef}>
            <div ref={listRef}>
              {filtered.map((p) => (
                <a
                  key={p.num}
                  className="pf-item vis"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={(e) => handleRowEnter(e, p)}
                  onMouseLeave={() => setPreview((v) => ({ ...v, show: false }))}
                >
                  <span className="pi-num">{p.num}</span>
                  <div>
                    <div className="pi-name">{p.name}</div>
                    <div className="pi-tagline">{p.tagline}</div>
                  </div>
                  <div className="pi-tags">{p.tags.map((t) => <span key={t} className="pi-tag">{t}</span>)}</div>
                  <span className="pi-year">{p.year}</span>
                  <span className="pi-arrow"><i className="bi bi-arrow-up-right" /></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className={`pf-scroll-hint${scrollable ? ' show' : ''}`}>
          <span className="pf-scroll-counter">Showing <em>{filtered.length}</em> of <em>{filtered.length}</em> projects</span>
          <div className="pf-scroll-arrows">
            <button className="pf-scroll-btn" disabled={atTop} onClick={() => scrollRef.current?.scrollBy({ top: -288, behavior: 'smooth' })}><i className="bi bi-chevron-up" /></button>
            <button className="pf-scroll-btn" disabled={atBottom} onClick={() => scrollRef.current?.scrollBy({ top: 288, behavior: 'smooth' })}><i className="bi bi-chevron-down" /></button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pf-bottom">
          <div className="pf-btns">
            <a href="/" target="_blank" rel="noreferrer" className="btn-fill">View All Work <i className="bi bi-arrow-up-right" /></a>
            <a href="#contact" className="btn-ghost" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Start a Project <i className="bi bi-chat-square-dots" /></a>
          </div>
          <span className="pf-hint">Hover a row — preview snaps alongside ↗</span>
        </div>
      </div>

      {/* Floating preview */}
      <div
        className={`pf-preview${preview.show ? ' show' : ''}`}
        style={{ top: preview.top, left: preview.left }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={preview.src} alt={preview.label} />
        <div className="pf-preview-label">{preview.label}</div>
      </div>
    </section>
  );
}
