import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>A Sanctuary of Calm · Colombo, Sri Lanka</p>
        <h1 className={styles.title}>
          Where Healing<br />
          <em>Meets Luxury</em>
        </h1>
        <p className={styles.sub}>
          Ancient wellness traditions, expertly reimagined for the modern soul.
        </p>
        <div className={styles.ctas}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('treatments')}>
            Explore Treatments
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('packages')}>
            View Packages
          </button>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
      </div>
    </section>
  )
}
