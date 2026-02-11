'use client'

import Image from 'next/image'

export default function About() {
  const personalInfo = [
    { label: 'Name:', value: 'Vivek Shah' },
    { label: 'Email:', value: 'vivekshah061993@gmail.com' },
    { label: 'Phone:', value: '+91 9924745782' },
    { label: 'Location:', value: 'Ahmedabad, India' },
    { label: 'Education:', value: 'BCA in Computer Science' },
    { label: 'Languages:', value: 'English, Hindi, Gujarati' }
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-subtitle">Get To Know More</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            AI-Enabled Frontend Engineer | Senior UI & UX Specialist
          </p>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <div className="about-card fade-in">
              <div className="about-image-wrapper">
                <Image 
                  src="/images/vs.png" 
                  alt="Vivek Shah" 
                  width={500}
                  height={600}
                  className="img-fluid" 
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-card fade-in">
              
              <p className="text-muted-custom mb-2">
                I am an AI-Enabled Frontend Engineer with over 10+ years of experience, including practical experience using AI-assisted tools in frontend development and UI engineering. Currently working at Cygnet Infotech Pvt. Ltd. for more than 6 years, I design and deliver responsive, scalable, and user-focused web interfaces optimized through AI-driven workflows.
              </p>
              <p className="text-muted-custom mb-2">
                I have hands-on experience leveraging AI tools such as ChatGPT, GitHub Copilot, and design-to-code automation to:              
              </p>
              <div class="ai-tools-list">
                    <ul>
                        <li>Generate and refactor frontend code (HTML, CSS, JavaScript)</li>
                        <li>Create reusable UI components, forms, tables, and dashboards</li>
                        <li>Improve development speed, consistency, and code quality</li>
                        <li>Optimize UI performance and accessibility with AI-based suggestions</li>
                    </ul>
                </div>
              <p className="text-muted-custom mb-2">
                My technical skill set includes HTML5, CSS3 (SCSS/LESS), JavaScript, jQuery, Bootstrap 3+, along with strong expertise in UI/UX design tools like Figma, Adobe XD, and Photoshop. I specialize in converting designs into pixel-perfect, production-ready interfaces using AI-assisted development practices rather than manual coding alone.
              </p>
              <p className="text-muted-custom mb-2">
                I work closely with developers and product teams to ensure smooth AI-supported design-to-development handoff, follow design system standards, and maintain clean, maintainable frontend architecture. I also mentor junior designers and frontend team members on AI-enabled productivity, prompt-based UI generation, and modern UI best practices.
              </p>
              <ul className="info-list">
                {personalInfo.map((info, index) => (
                  <li className="info-item" key={index}>
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
