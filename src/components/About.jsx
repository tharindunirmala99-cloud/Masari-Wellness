import React, { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

const stats = [
  { num: '24+', label: 'Signature Treatments' },
  { num: '98%', label: 'Guest Satisfaction' },
  { num: '8', label: 'Private Suites' },
  { num: '5★', label: 'Certified Therapists' },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className={`${styles.about} ${visible ? styles.visible : ''}`} ref={ref}>
      <div className={styles.imageWrap}>
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=80"
          alt="Spa treatment room"
          className={styles.img}
          loading="lazy"
        />
        <div className={styles.badge}>
          <span className={styles.badgeNum}>10+</span>
          <span className={styles.badgeLabel}>Years of<br />Wellness</span>
        </div>
        <div className={styles.accent} />
      </div>

      <div className={styles.text}>
        <span className={styles.eyebrow}>Our Philosophy</span>
        <h2 className={styles.title}>
          A Holistic Journey<br />for <em>Body & Soul</em>
        </h2>
        <div className={styles.divider} />
        <p className={styles.desc}>
          Serenity Spa was founded on the belief that true wellness goes beyond the surface. Drawing from Ayurvedic wisdom, Balinese healing traditions and contemporary science, every treatment is a ritual crafted to restore balance and awaken the senses.
        </p>
        <p className={styles.desc} style={{ marginTop: '1rem' }}>
          Nestled in the heart of Colombo, our sanctuary is a refuge from the city's rhythm — where time slows, and every detail is designed for your deepest restoration.
        </p>
        <div className={styles.stats}>
          {stats.map(s => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
