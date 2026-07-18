'use client';
import { useState, useRef, useEffect, useCallback } from 'react';

type GalleryImg = { file: string; label: string };
type Project = {
  num: string;
  name: string;
  tagline: string;
  tags: string[];
  year: string;
  cat: string;
  slug: string;
  gallery: GalleryImg[];
};

const PROJECTS: Project[] = [
  {
    num: '01', name: 'DocDoc', tagline: 'Healthcare booking platform — end-to-end patient journey redesign',
    tags: ['SaaS', 'Healthcare', 'UI/UX'], year: '2023', cat: 'web saas', slug: 'docdoc',
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
      { file: 'Login.png', label: 'Login' },
    ],
  },
  {
    num: '02', name: 'Spring Money', tagline: 'Fintech platform — investment dashboards & onboarding flows',
    tags: ['SaaS', 'Fintech', 'Dashboard'], year: '2023', cat: 'web saas', slug: 'springmoney',
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
    ],
  },
  {
    num: '03', name: 'Reece Safety', tagline: 'B2B e-commerce — product catalogue & procurement UX',
    tags: ['E-Commerce', 'B2B'], year: '2022', cat: 'web ecommerce', slug: 'reece-safety',
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
    ],
  },
  {
    num: '04', name: 'Trueself', tagline: 'Wellness & personal development — calm, trust-first visual identity',
    tags: ['Wellness', 'Branding'], year: '2021', cat: 'web branding', slug: 'trueself',
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
    ],
  },
  {
    num: '05', name: 'CygnetTax', tagline: 'Tax compliance suite — landing, dashboard, listing & login flows',
    tags: ['SaaS', 'Tax', 'Compliance'], year: '2024', cat: 'web saas compliance', slug: 'cygnettax',
    gallery: [
      { file: 'Cygnettax-landingpage.png', label: 'Landing Page' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Listing.png', label: 'Listing' },
      { file: 'Login.png', label: 'Login' },
    ],
  },
  {
    num: '06', name: 'Cygnature', tagline: 'E-signature platform — dashboard & login with full RTL support',
    tags: ['SaaS', 'E-Signature', 'RTL'], year: '2024', cat: 'web saas compliance', slug: 'cygnature',
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Dashboard_RTL.png', label: 'Dashboard (RTL)' },
      { file: 'Login.png', label: 'Login' },
      { file: 'Login_RTL.png', label: 'Login (RTL)' },
    ],
  },
  {
    num: '07', name: 'Cygnet Audit Tool', tagline: 'Audit management dashboard — streamlined login & workspace UX',
    tags: ['SaaS', 'Audit', 'Compliance'], year: '2024', cat: 'web saas compliance', slug: 'cygnet-audit-tool',
    gallery: [
      { file: 'Login.png', label: 'Login' },
      { file: 'Dashboard.png', label: 'Dashboard' },
    ],
  },
  {
    num: '08', name: 'Cygnet Billing Solution', tagline: 'Billing & invoicing suite — registration through dashboard flow',
    tags: ['SaaS', 'Billing', 'Compliance'], year: '2024', cat: 'web saas compliance', slug: 'cygnet-billing-solution',
    gallery: [
      { file: 'LandingPage.png', label: 'Landing Page' },
      { file: 'Registration.png', label: 'Registration' },
      { file: 'Login.png', label: 'Login' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Listing.png', label: 'Listing' },
    ],
  },
  {
    num: '09', name: 'Cygnet Global E-Invoicing Solution', tagline: 'Global e-invoicing platform — country-wise compliance dashboards',
    tags: ['SaaS', 'E-Invoicing', 'Compliance'], year: '2024', cat: 'web saas compliance', slug: 'cygnet-global-e-invoicing',
    gallery: [
      { file: 'Login.png', label: 'Login' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Dashboard-Country-Wise.png', label: 'Dashboard (Country-wise)' },
      { file: 'Listing.png', label: 'Listing' },
    ],
  },
  {
    num: '10', name: 'Cygnet Vendor Postbox', tagline: 'Vendor communication portal — listing & dashboard experience',
    tags: ['SaaS', 'Vendor Portal', 'Compliance'], year: '2024', cat: 'web saas compliance', slug: 'cygnet-vendor-postbox',
    gallery: [
      { file: 'Login.png', label: 'Login' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Listing.png', label: 'Listing' },
    ],
  },
  {
    num: '11', name: 'R7 VAT — Europe', tagline: 'VAT compliance dashboard built for the European market',
    tags: ['SaaS', 'VAT', 'Compliance'], year: '2024', cat: 'web saas compliance', slug: 'r7vat-europe',
    gallery: [
      { file: 'Login.png', label: 'Login' },
      { file: 'Dashboard.png', label: 'Dashboard' },
    ],
  },
  {
    num: '12', name: 'R7 VAT — GCC', tagline: 'VAT compliance dashboard for the GCC region, with RTL support',
    tags: ['SaaS', 'VAT', 'RTL'], year: '2024', cat: 'web saas compliance', slug: 'r7vat-gcc',
    gallery: [
      { file: 'Login.png', label: 'Login' },
      { file: 'Login_RTL.png', label: 'Login (RTL)' },
      { file: 'Dashboard.png', label: 'Dashboard' },
      { file: 'Dashboard_RTL.png', label: 'Dashboard (RTL)' },
    ],
  },
];

const FILTERS = ['all', 'saas', 'compliance', 'ecommerce', 'branding'];

const imgSrc = (p: Project, file: string) => `/images/portfolio/${p.slug}/${file}`;

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [preview, setPreview] = useState<{ src: string; label: string; top: number; left: number; show: boolean }>({ src: '', label: '', top: -9999, left: -9999, show: false });
  const [lightbox, setLightbox] = useState<{ open: boolean; project: Project | null; index: number }>({ open: false, project: null, index: 0 });
  const [zoomed, setZoomed] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const lbImgRef = useRef<HTMLImageElement>(null);
  const clickRatioRef = useRef({ x: 0.5, y: 0.5 });
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

  const handleRowEnter = (e: React.MouseEvent<HTMLDivElement>, p: Project) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const PW = 460, PH = 306, margin = 16;
    const rowMidY = rect.top + rect.height / 2;
    let top = Math.max(margin, Math.min(rowMidY - PH / 2, window.innerHeight - PH - margin));
    const listR = listRef.current?.getBoundingClientRect();
    let left = listR ? (window.innerWidth - listR.right >= PW + 24 ? listR.right + 20 : listR.left >= PW + 24 ? listR.left - PW - 20 : window.innerWidth - PW - margin) : window.innerWidth - PW - margin;
    setPreview({ src: imgSrc(p, p.gallery[0].file), label: p.name, top, left, show: true });
  };

  const openLightbox = (p: Project) => {
    setPreview((v) => ({ ...v, show: false }));
    setZoomed(false);
    setLightbox({ open: true, project: p, index: 0 });
  };
  const closeLightbox = () => { setZoomed(false); setLightbox((v) => ({ ...v, open: false })); };
  const goTo = useCallback((delta: number) => {
    setZoomed(false);
    setLightbox((v) => {
      if (!v.project) return v;
      const len = v.project.gallery.length;
      return { ...v, index: (v.index + delta + len) % len };
    });
  }, []);

  const handleImgClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    clickRatioRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
    setZoomed((z) => !z);
  };

  useEffect(() => {
    const stage = stageRef.current;
    const img = lbImgRef.current;
    if (!stage || !img) return;
    requestAnimationFrame(() => {
      if (zoomed) {
        const { x, y } = clickRatioRef.current;
        stage.scrollLeft = x * img.offsetWidth - stage.clientWidth / 2;
        stage.scrollTop = y * img.offsetHeight - stage.clientHeight / 2;
      } else {
        stage.scrollLeft = 0;
        stage.scrollTop = 0;
      }
    });
  }, [zoomed]);

  useEffect(() => {
    if (!lightbox.open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goTo(1);
      if (e.key === 'ArrowLeft') goTo(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [lightbox.open, goTo]);

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        {/* Header */}
        <div className="pf-header">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="pf-title">Work that<br /><span>speaks for itself.</span></h2>
            <p className="pf-desc">10+ years of crafting digital products across healthcare, finance, e-commerce, and enterprise SaaS — built with purpose, refined through research.</p>
          </div>
          <div className="pf-meta">
            <div>
              <div className="pf-bignum">{PROJECTS.length}<sub>+</sub></div>
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
                <div
                  key={p.num}
                  className="pf-item vis"
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(p)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(p); } }}
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
                  <span className="pi-arrow"><i className="bi bi-images" /></span>
                </div>
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
          <span className="pf-hint">Hover a row to preview · Click to open the gallery</span>
        </div>
      </div>

      {/* Floating preview */}
      <div
        className={`pf-preview${preview.show ? ' show' : ''}`}
        style={{ top: preview.top, left: preview.left }}
      >
        <div className="pf-preview-img" style={{ backgroundImage: preview.src ? `url(${preview.src})` : 'none' }} role="img" aria-label={preview.label} />
        <div className="pf-preview-label">{preview.label}</div>
      </div>

      {/* Lightbox */}
      {lightbox.project && (
        <div className={`pf-lightbox${lightbox.open ? ' open' : ''}`} onClick={closeLightbox}>
          <div className="pf-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="pf-lb-close" aria-label="Close" onClick={closeLightbox}><i className="bi bi-x-lg" /></button>

            <div className="pf-lb-footer">
              <div>
                <div className="pf-lb-title">{lightbox.project.name}</div>
                <div className="pf-lb-caption">{lightbox.project.gallery[lightbox.index].label}</div>
              </div>
              {lightbox.project.gallery.length > 1 && (
                <div className="pf-lb-counter">{lightbox.index + 1} / {lightbox.project.gallery.length}</div>
              )}
            </div>

            <div className="pf-lb-stage-wrap">
              <div className="pf-lb-stage" ref={stageRef}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={lightbox.index}
                  ref={lbImgRef}
                  className={`pf-lb-img${zoomed ? ' zoomed' : ''}`}
                  src={imgSrc(lightbox.project, lightbox.project.gallery[lightbox.index].file)}
                  alt={`${lightbox.project.name} — ${lightbox.project.gallery[lightbox.index].label}`}
                  onClick={handleImgClick}
                />
              </div>
              {lightbox.project.gallery.length > 1 && (
                <>
                  <button className="pf-lb-nav prev" aria-label="Previous image" onClick={() => goTo(-1)}><i className="bi bi-chevron-left" /></button>
                  <button className="pf-lb-nav next" aria-label="Next image" onClick={() => goTo(1)}><i className="bi bi-chevron-right" /></button>
                </>
              )}
              <span className={`pf-lb-zoom-hint${zoomed ? ' hide' : ''}`}><i className="bi bi-zoom-in" /> Click to zoom</span>
            </div>

            {lightbox.project.gallery.length > 1 && (
              <div className="pf-lb-thumbs">
                {lightbox.project.gallery.map((g, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={g.file}
                    src={imgSrc(lightbox.project as Project, g.file)}
                    alt={g.label}
                    className={`pf-lb-thumb${i === lightbox.index ? ' active' : ''}`}
                    onClick={() => { setZoomed(false); setLightbox((v) => ({ ...v, index: i })); }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
