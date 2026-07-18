'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { imgSrc, type Project } from '@/data/projects';

type Props = {
  project: Project | null;
  open: boolean;
  index: number;
  onClose: () => void;
  onNavigate: (delta: number) => void;
  onSelectIndex: (i: number) => void;
  showCaseStudyLink?: boolean;
};

export default function GalleryLightbox({ project, open, index, onClose, onNavigate, onSelectIndex, showCaseStudyLink = true }: Props) {
  const [zoomed, setZoomed] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const lbImgRef = useRef<HTMLImageElement>(null);
  const clickRatioRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => { setZoomed(false); }, [index, open]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open, onClose, onNavigate]);

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

  const handleImgClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    clickRatioRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
    setZoomed((z) => !z);
  };

  if (!project) return null;
  const current = project.gallery[index];

  return (
    <div className={`pf-lightbox${open ? ' open' : ''}`} onClick={onClose}>
      <div className="pf-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="pf-lb-close" aria-label="Close" onClick={onClose}><i className="bi bi-x-lg" /></button>

        <div className="pf-lb-footer">
          <div>
            <div className="pf-lb-title">{project.name}</div>
            <div className="pf-lb-caption">{current.label}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {showCaseStudyLink && (
              <Link href={`/work/${project.slug}`} className="pf-lb-case-link">
                Full Case Study <i className="bi bi-arrow-up-right" />
              </Link>
            )}
            {project.gallery.length > 1 && (
              <div className="pf-lb-counter">{index + 1} / {project.gallery.length}</div>
            )}
          </div>
        </div>

        <div className="pf-lb-stage-wrap">
          <div className="pf-lb-stage" ref={stageRef}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={index}
              ref={lbImgRef}
              className={`pf-lb-img${zoomed ? ' zoomed' : ''}`}
              src={imgSrc(project, current.file)}
              alt={`${project.name} — ${current.label}`}
              onClick={handleImgClick}
            />
          </div>
          {project.gallery.length > 1 && (
            <>
              <button className="pf-lb-nav prev" aria-label="Previous image" onClick={() => onNavigate(-1)}><i className="bi bi-chevron-left" /></button>
              <button className="pf-lb-nav next" aria-label="Next image" onClick={() => onNavigate(1)}><i className="bi bi-chevron-right" /></button>
            </>
          )}
          <span className={`pf-lb-zoom-hint${zoomed ? ' hide' : ''}`}><i className="bi bi-zoom-in" /> Click to zoom</span>
        </div>

        {project.gallery.length > 1 && (
          <div className="pf-lb-thumbs">
            {project.gallery.map((g, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={g.file}
                src={imgSrc(project, g.file)}
                alt={g.label}
                className={`pf-lb-thumb${i === index ? ' active' : ''}`}
                onClick={() => onSelectIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
