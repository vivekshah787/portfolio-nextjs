'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Address',
      details: ['Khokhra, Ahmedabad', 'Gujarat, India']
    },
    {
      icon: 'bi-telephone',
      title: 'Phone',
      details: ['+91 9924745782'],
      link: 'tel:+919924745782'
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      details: ['vivekshahproductdesigner@gmail.com'],
      link: 'mailto:vivekshahproductdesigner@gmail.com'
    }
  ]

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-description">
            Let&apos;s discuss your next project and bring your ideas to life
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-4">
            <div className="contact-info fade-in">
              {contactInfo.map((info, index) => (
                <div className="contact-item" key={index}>
                  <div className="contact-icon">
                    <i className={`bi ${info.icon}`}></i>
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <p><a href={info.link}>{info.details[0]}</a></p>
                    ) : (
                      info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))
                    )}
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
