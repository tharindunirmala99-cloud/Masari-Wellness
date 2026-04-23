import React, { useState } from 'react'
import styles from './Contact.module.css'

const infoItems = [
  {
    label: 'Address',
    value: '45 Galle Road, Colombo 03\nWestern Province, Sri Lanka',
  },
  {
    label: 'Reservations',
    value: '+94 11 754 1010\nhello@serenityspa.lk',
  },
  {
    label: 'Follow Us',
    value: '@serenityspa.lk',
  },
]

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 10:00 PM' },
  { day: 'Sunday & Public Holidays', time: '9:00 AM – 8:00 PM' },
]

const services = [
  { group: 'Treatments', items: ['Balinese Massage', 'Luxury Facial', 'Hot Stone Therapy', 'Body Scrub & Wrap', 'Reflexology'] },
  { group: 'Packages', items: ['The Relaxation Ritual', 'The Serenity Signature', "Couple's Retreat"] },
]

export default function Contact() {
  const [form, setForm] = useState({
    fname: '', lname: '', email: '', phone: '', service: '', date: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const data = new FormData()
    Object.entries(form).forEach(([k, v]) => data.append(k, v))
    data.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)
    data.append('subject', 'New Spa Enquiry — Serenity Spa')
    data.append('from_name', 'Serenity Spa Website')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      setStatus(json.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      {/* Left: info */}
      <div className={styles.info}>
        <span className={styles.eyebrow}>Get in Touch</span>
        <h2 className={styles.title}>
          Begin Your<br /><em>Journey</em>
        </h2>
        <div className={styles.divider} />
        <p className={styles.desc}>
          We would love to welcome you. Reach out to book a treatment, enquire about packages or simply ask a question.
        </p>

        <div className={styles.infoList}>
          {infoItems.map(item => (
            <div key={item.label} className={styles.infoItem}>
              <div className={styles.infoIcon}>✦</div>
              <div>
                <div className={styles.infoLabel}>{item.label}</div>
                <div className={styles.infoVal}>
                  {item.value.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < item.value.split('\n').length - 1 && <br />}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.hours}>
          <div className={styles.hoursTitle}>Opening Hours</div>
          {hours.map(h => (
            <div key={h.day} className={styles.hoursRow}>
              <span className={styles.hoursDay}>{h.day}</span>
              <span>{h.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: form */}
      <div className={styles.formWrap}>
        <div className={styles.formTitle}>Send us a message</div>

        {status === 'success' ? (
          <div className={styles.success}>
            <div className={styles.check}>✓</div>
            <p>Thank you for reaching out.<br />We will be in touch within 24 hours to confirm your booking.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="fname">First Name</label>
                <input id="fname" name="fname" type="text" placeholder="Amara" required value={form.fname} onChange={handleChange} />
              </div>
              <div className={styles.group}>
                <label htmlFor="lname">Last Name</label>
                <input id="lname" name="lname" type="text" placeholder="Mendis" required value={form.lname} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="amara@email.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className={styles.group}>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" placeholder="+94 77 000 0000" value={form.phone} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.group}>
              <label htmlFor="service">Treatment / Package</label>
              <select id="service" name="service" value={form.service} onChange={handleChange}>
                <option value="" disabled>Select a treatment or package</option>
                {services.map(g => (
                  <optgroup key={g.group} label={g.group}>
                    {g.items.map(item => <option key={item}>{item}</option>)}
                  </optgroup>
                ))}
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div className={styles.group}>
              <label htmlFor="date">Preferred Date</label>
              <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
            </div>
            <div className={styles.group}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us anything that would help us prepare for your visit…"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            {status === 'error' && (
              <p className={styles.errorMsg}>Something went wrong. Please try again or call us directly.</p>
            )}
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
