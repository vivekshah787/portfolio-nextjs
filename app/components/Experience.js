'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'Senior UI Designer',
      company: 'Cygnet Infotech PVT LTD.',
      date: 'Jun 2019 - Present',
      description: 'Designed and implemented responsive UI/UX solutions, collaborating with developers and mentoring junior designers. Ensured seamless multi-device compatibility using HTML, CSS, JavaScript, and best practices.'
    },
    {
      title: 'Front End/UI Designer',
      company: 'GreenApex',
      date: 'Feb 2019 - May 2019',
      description: 'Developed user-friendly, responsive web pages and optimized layouts for various devices. Worked closely with developers and mentored juniors on UI/UX best practices.'
    },
    {
      title: 'Front End Designer',
      company: 'IndiaNic',
      date: 'Sep 2017 - Jan 2019',
      description: 'Created clean, responsive UI designs using HTML, CSS, JavaScript, and jQuery. Focused on enhancing user experience and performance optimization.'
    },
    {
      title: 'Web Designer',
      company: 'PrimeApps',
      date: 'Dec 2015 - Jul 2017',
      description: 'Designed and developed responsive websites, improving navigation and load performance. Maintained front-end pages using HTML, CSS, JavaScript, and jQuery.'
    }
  ]

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-subtitle">Career Journey</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            Designing experiences, not just interfaces – crafting the future of web and UI with innovation
          </p>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className="timeline-item fade-in" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{exp.date}</span>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
