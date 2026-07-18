import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS, getProjectBySlug, imgSrc } from '@/data/projects';
import CaseStudyNav from '@/components/CaseStudyNav';
import CaseStudyGallery from '@/components/CaseStudyGallery';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study | Vivek Shah`,
    description: project.tagline,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      <CustomCursor />
      <CaseStudyNav />
      <main>
        <section className="cs-hero">
          <div className="cs-container">
            <p className="eyebrow">Case Study</p>
            <h1 className="cs-title">{project.name}</h1>
            <p className="cs-tagline">{project.tagline}</p>
            <div className="cs-meta-row">
              <div className="cs-meta-item"><span className="cs-meta-label">Role</span><span className="cs-meta-value">{project.role}</span></div>
              <div className="cs-meta-item"><span className="cs-meta-label">Duration</span><span className="cs-meta-value">{project.duration}</span></div>
              <div className="cs-meta-item"><span className="cs-meta-label">Year</span><span className="cs-meta-value">{project.year}</span></div>
              <div className="cs-meta-tags">{project.tags.map((t) => <span key={t} className="pi-tag">{t}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="cs-cover-section">
          <div className="cs-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgSrc(project, project.gallery[0].file)} alt={project.name} className="cs-cover-img" />
          </div>
        </section>

        <section className="cs-content-section">
          <div className="cs-container cs-content-grid">
            <div className="cs-content-main">
              <h2 className="cs-h2">Overview</h2>
              <p className="cs-p">{project.overview}</p>
              <h2 className="cs-h2">The Problem</h2>
              <p className="cs-p">{project.problem}</p>
              <h2 className="cs-h2">The Approach</h2>
              <p className="cs-p">{project.approach}</p>
            </div>
            <aside className="cs-highlights">
              <h3 className="cs-h3">Highlights</h3>
              <ul>
                {project.highlights.map((h) => (
                  <li key={h}><i className="bi bi-check2" />{h}</li>
                ))}
              </ul>
              <Link href="/#contact" className="btn-fill cs-highlights-cta">Start a Project <i className="bi bi-chat-square-dots" /></Link>
            </aside>
          </div>
        </section>

        <section className="cs-gallery-section">
          <div className="cs-container">
            <h2 className="cs-h2">Full Gallery</h2>
            <p className="cs-p cs-gallery-hint">Click any screen to open it full-size and zoom in.</p>
            <CaseStudyGallery project={project} />
          </div>
        </section>

        <section className="cs-nav-projects">
          <div className="cs-container cs-nav-projects-row">
            <Link href={`/work/${prevProject.slug}`} className="cs-nav-project prev">
              <span className="cs-nav-label"><i className="bi bi-arrow-left" /> Previous</span>
              <span className="cs-nav-name">{prevProject.name}</span>
            </Link>
            <Link href="/#portfolio" className="cs-nav-all">All Projects</Link>
            <Link href={`/work/${nextProject.slug}`} className="cs-nav-project next">
              <span className="cs-nav-label">Next <i className="bi bi-arrow-right" /></span>
              <span className="cs-nav-name">{nextProject.name}</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
