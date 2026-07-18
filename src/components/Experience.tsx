'use client';

const TIMELINE = [
  {
    date: 'Jun 2019 — Present',
    role: 'Senior UI/Product Designer',
    company: 'Cygnet Infotech, Ahmedabad',
    desc: 'Leading UI/UX design for enterprise SaaS products, managing design systems, mentoring junior designers, and collaborating with cross-functional product and dev teams.',
    badge: 'Full-time · 6+ yrs',
  },
  {
    date: 'Feb 2019 — May 2019',
    role: 'UI/UX Designer',
    company: 'GreenApex LLP, Ahmedabad',
    desc: 'Developed and maintained user-facing webpages using HTML5, CSS3, JavaScript, and jQuery with emphasis on responsive, multi-device layouts,Created responsive designs optimizing layouts across mobile, tablet, and desktop platforms,Mentored junior designers on UX and UI best practices to raise team quality standards.',
    badge: 'Freelance',
  },
  {
    date: 'Sep 2017 — Jan 2019',
    role: 'IndiaNIC Infotech Limited, Ahmedabad',
    company: 'Digital Agency, Ahmedabad',
    desc: 'Created pixel-perfect HTML/CSS templates, landing pages, and branding assets for local and international clients.',
    badge: 'Agency',
  },
  {
    date: 'Jul 2017 — Dec 2015',
    role: 'Prime Apps Infotech, Ahmedabad',
    company: 'Digital Agency, Ahmedabad',
    desc: 'Delivered clean, standards-compliant HTML and CSS across multiple client projects,Built responsive websites ensuring optimized performance, usability, and cross-browser consistency,Collaborated with cross-functional teams including developers, QA, and project managers to enhance client websites.',
    badge: 'Agency',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="experience-container">
        <div className="experience-grid">
          <div>
            <p className="section-label reveal">Work History</p>
            <h2 className="section-title reveal reveal-delay-1">My <span>Experience</span></h2>
            <div className="timeline" style={{ marginTop: 48 }}>
              {TIMELINE.map((item, i) => (
                <div className={`timeline-item reveal reveal-delay-${i + 1}`} key={item.role}>
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div className="timeline-date">
                      <i className="bi bi-calendar3" /> {item.date}
                    </div>
                    <div className="timeline-header">
                      <div className="timeline-role">{item.role}</div>
                      <span className="timeline-badge">{item.badge}</span>
                    </div>
                    <div className="timeline-company"><i className="bi bi-building" /> {item.company}</div>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
            <div className="exp-big-num">10<br/>Years</div>
            <p style={{ textAlign: 'center', color: 'var(--clr-muted)', fontSize: 15, lineHeight: 1.7 }}>
              A decade of crafting interfaces that users love and businesses trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
