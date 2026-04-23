import React, { useEffect, useRef, useState } from 'react'
import styles from './Treatments.module.css'

const treatments = [
  {
    tag: 'Signature',
    name: 'Balinese Massage',
    desc: 'A full-body deep-tissue treatment combining stretching, acupressure and essential oils to release tension and restore energy flow.',
    img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
    featured: true,
  },
  {
    tag: 'Rejuvenation',
    name: 'Luxury Facials',
    desc: 'Bespoke facial rituals using botanical extracts to deeply nourish and illuminate your skin.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80',
  },
  {
    tag: 'Therapeutic',
    name: 'Hot Stone Therapy',
    desc: 'Heated basalt stones melt away deep muscle tension and warm the spirit.',
    img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=700&q=80',
  },
  {
    tag: 'Renewal',
    name: 'Body Scrubs & Wraps',
    desc: 'Exfoliating and hydrating rituals that leave skin silky, radiant and renewed.',
    img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700&q=80',
  },
  {
    tag: 'Balance',
    name: 'Reflexology',
    desc: 'Targeted pressure-point therapy to improve energy flow, circulation and overall well-being.',
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&q=80',
  },
]

function TreatmentCard({ treatment, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.card} ${treatment.featured ? styles.featured : ''} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={treatment.img} alt={treatment.name} className={styles.img} loading="lazy" />
      <div className={`${styles.overlay} ${hovered ? styles.overlayHovered : ''}`}>
        <div className={styles.tag}>{treatment.tag}</div>
        <div className={styles.name}>{treatment.name}</div>
        <div className={`${styles.desc} ${hovered ? styles.descVisible : ''}`}>
          {treatment.desc}
        </div>
        <a
          href="#contact"
          className={`${styles.link} ${hovered ? styles.linkVisible : ''}`}
          onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
        >
          Book Now →
        </a>
      </div>
    </div>
  )
}

export default function Treatments() {
  const scrollTo = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="treatments" className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Our Treatments</span>
          <h2 className={styles.title}>Rituals of <em>Restoration</em></h2>
        </div>
        <button className={styles.menuBtn} onClick={scrollTo}>View Full Menu</button>
      </div>
      <div className={styles.grid}>
        {treatments.map((t, i) => (
          <TreatmentCard key={t.name} treatment={t} index={i} />
        ))}
      </div>
    </section>
  )
}
