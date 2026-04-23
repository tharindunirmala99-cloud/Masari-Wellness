import React, { useEffect, useRef, useState } from 'react'
import styles from './Packages.module.css'

const packages = [
  {
    num: '01',
    name: 'The Relaxation Ritual',
    duration: '90 Minutes · Solo',
    desc: 'A gentle introduction to total calm — the perfect mid-week reset for a busy mind and tired body.',
    includes: [
      'Balinese Massage (60 min)',
      'Foot Reflexology (30 min)',
      'Welcome herbal tea ritual',
    ],
    price: 'Rs 18,500',
    per: 'per person',
  },
  {
    num: '02',
    name: 'The Serenity Signature',
    duration: '2.5 Hours · Solo',
    desc: 'Our most beloved package — a complete sensory journey that blends body, skin and mind restoration.',
    includes: [
      'Himalayan Salt Body Scrub',
      'Hot Stone Full Body Massage',
      'Natural Asian Facial (50 min)',
      'Aromatherapy steam',
    ],
    price: 'Rs 32,000',
    per: 'per person',
    featured: true,
  },
  {
    num: '03',
    name: "Couple's Retreat",
    duration: '2 Hours · For Two',
    desc: "A shared sanctuary experience — slow down together and reconnect in our private couple's suite.",
    includes: [
      'Four-Hands Balinese Massage',
      'Couples facial & body wrap',
      'Private steam room access',
      'Rose petal bath & champagne',
    ],
    price: 'Rs 58,000',
    per: 'for two',
  },
]

function PackageCard({ pkg, index }) {
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

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div
      ref={ref}
      className={`${styles.card} ${pkg.featured ? styles.featured : ''} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {pkg.featured && <div className={styles.badge}>Most Popular</div>}
      <div className={styles.cardNum}>{pkg.num}</div>
      <div className={styles.cardName}>{pkg.name}</div>
      <div className={styles.cardDuration}>{pkg.duration}</div>
      <p className={styles.cardDesc}>{pkg.desc}</p>
      <ul className={styles.cardIncludes}>
        {pkg.includes.map(item => <li key={item}>{item}</li>)}
      </ul>
      <div className={styles.cardFooter}>
        <div className={styles.cardPrice}>
          {pkg.price} <span>{pkg.per}</span>
        </div>
        <button className={styles.bookBtn} onClick={scrollToContact}>
          Book Now
        </button>
      </div>
    </div>
  )
}

export default function Packages() {
  return (
    <section id="packages" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Curated Packages</span>
        <h2 className={styles.title}>Tailored <em>Escapes</em></h2>
        <p className={styles.desc}>
          Each package is thoughtfully designed to offer an immersive, uninterrupted journey of wellness.
        </p>
      </div>
      <div className={styles.grid}>
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.num} pkg={pkg} index={i} />
        ))}
      </div>
    </section>
  )
}
