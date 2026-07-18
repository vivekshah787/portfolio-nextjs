'use client';
import { useState } from 'react';
import { imgSrc, type Project } from '@/data/projects';
import GalleryLightbox from './GalleryLightbox';

export default function CaseStudyGallery({ project }: { project: Project }) {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });

  const goTo = (delta: number) => setLightbox((v) => ({ ...v, index: (v.index + delta + project.gallery.length) % project.gallery.length }));

  return (
    <>
      <div className="cs-gallery-grid">
        {project.gallery.map((g, i) => (
          <button key={g.file} className="cs-gallery-item" onClick={() => setLightbox({ open: true, index: i })}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgSrc(project, g.file)} alt={g.label} loading="lazy" />
            <span className="cs-gallery-caption">{g.label} <i className="bi bi-zoom-in" /></span>
          </button>
        ))}
      </div>

      <GalleryLightbox
        project={project}
        open={lightbox.open}
        index={lightbox.index}
        onClose={() => setLightbox((v) => ({ ...v, open: false }))}
        onNavigate={goTo}
        onSelectIndex={(i) => setLightbox((v) => ({ ...v, index: i }))}
        showCaseStudyLink={false}
      />
    </>
  );
}
