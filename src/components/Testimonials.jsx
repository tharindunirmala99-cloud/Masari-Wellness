import React, { useEffect, useRef, useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    initials: 'AM',
    name: 'Amara Mendis',
    location: 'Colombo, Sri Lanka',
    text: 'The Masari Wellness and Signature package was transformative. I walked in exhausted and walked out feeling genuinely reborn. The therapist was exceptional.',
  },
  {
    initials: 'RF',
    name: 'Rohan & Jess Fernando',
    location: 'Colombo, Sri Lanka',
    text: "We booked the Couple's Retreat for our anniversary. Absolutely flawless from start to finish — the attention to detail is unmatched in Colombo.",
  },
  {
    initials: 'NK',
    name: 'Nadia Kruger',
    location: 'Visiting from Singapore',
    text: 'As a regular spa-goer across Asia, Masari Wellness and is genuinely world-class. The hot stone therapy here rivals any five-star resort I have visited.',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="testimonials" className={styles.section} ref={ref}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Guest Stories</span>
        <h2 className={styles.title}>Words from Our <em>Guests</em></h2>
      </div>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`${styles.card} ${visible ? styles.visible : ''}`}
            style={{ transitionDelay: `${i * 0.13}s` }}
          >
            <div className={styles.stars}>★★★★★</div>
            <div className={styles.quote}>"</div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.loc}>{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
