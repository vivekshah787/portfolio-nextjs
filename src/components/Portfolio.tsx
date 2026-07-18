'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { PROJECTS, FILTERS, imgSrc, type Project } from '@/data/projects';
import GalleryLightbox from './GalleryLightbox';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [preview, setPreview] = useState<{ src: string; label: string; top: number; left: number; show: boolean }>({ src: '', label: '', top: -9999, left: -9999, show: false });
  const [lightbox, setLightbox] = useState<{ open: boolean; project: Project | null; index: number }>({ open: false, project: null, index: 0 });
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

  const handleRowEnter = (e: React.MouseEvent<HTMLButtonElement>, p: Project) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const PW = 460, PH = 306, margin = 16;
    const rowMidY = rect.top + rect.height / 2;
    const top = Math.max(margin, Math.min(rowMidY - PH / 2, window.innerHeight - PH - margin));
    const listR = listRef.current?.getBoundingClientRect();
    const left = listR ? (window.innerWidth - listR.right >= PW + 24 ? listR.right + 20 : listR.left >= PW + 24 ? listR.left - PW - 20 : window.innerWidth - PW - margin) : window.innerWidth - PW - margin;
    setPreview({ src: imgSrc(p, p.gallery[0].file), label: p.name, top, left, show: true });
  };

  const openLightbox = (p: Project) => {
    setPreview((v) => ({ ...v, show: false }));
    setLightbox({ open: true, project: p, index: 0 });
  };
  const closeLightbox = () => setLightbox((v) => ({ ...v, open: false }));
  const goTo = useCallback((delta: number) => {
    setLightbox((v) => {
      if (!v.project) return v;
      const len = v.project.gallery.length;
      return { ...v, index: (v.index + delta + len) % len };
    });
  }, []);

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
                >
                  <span className="pi-num">{p.num}</span>
                  <div>
                    <div className="pi-name">{p.name}</div>
                    <div className="pi-tagline">{p.tagline}</div>
                  </div>
                  <div className="pi-tags">{p.tags.map((t) => <span key={t} className="pi-tag">{t}</span>)}</div>
                  <span className="pi-year">{p.year}</span>
                  <Link href={`/work/${p.slug}`} className="pi-case-link">
                    Case Study <i className="bi bi-arrow-up-right" />
                  </Link>
                  <button
                    type="button"
                    className="pi-arrow"
                    aria-label={`Open ${p.name} gallery`}
                    onClick={() => openLightbox(p)}
                    onMouseEnter={(e) => handleRowEnter(e, p)}
                    onMouseLeave={() => setPreview((v) => ({ ...v, show: false }))}
                  >
                    <i className="bi bi-images" />
                  </button>
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
          <span className="pf-hint">Hover the gallery icon to preview · Click it to open the gallery · &ldquo;Case Study&rdquo; for the full write-up</span>
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
      <GalleryLightbox
        project={lightbox.project}
        open={lightbox.open}
        index={lightbox.index}
        onClose={closeLightbox}
        onNavigate={goTo}
        onSelectIndex={(i) => setLightbox((v) => ({ ...v, index: i }))}
      />
    </section>
  );
}
