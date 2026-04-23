import React, { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'

const items = [
  {
    title: 'Certified Master Therapists',
    desc: 'All practitioners hold international certifications and undergo continuous training in their disciplines.',
  },
  {
    title: 'Natural & Organic Products',
    desc: 'We use only sustainably sourced botanical ingredients — free from harmful synthetics.',
  },
  {
    title: 'Private Treatment Suites',
    desc: 'Eight fully private suites with individually controlled ambience, music and temperature.',
  },
  {
    title: 'Personalised Wellness Consultation',
    desc: 'Every visit begins with a brief consultation to tailor your experience to your needs.',
  },
]

export default function Experience() {
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
    <section id="experience" className={styles.section} ref={ref}>
      <div className={styles.imagePanel} />
      <div className={`${styles.contentPanel} ${visible ? styles.visible : ''}`}>
        <span className={styles.eyebrow}>The Serenity Difference</span>
        <h2 className={styles.title}>
          Every Detail<br />Considered <em>for You</em>
        </h2>
        <div className={styles.divider} />
        <ul className={styles.list}>
          {items.map((item, i) => (
            <li
              key={item.title}
              className={`${styles.listItem} ${visible ? styles.itemVisible : ''}`}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className={styles.icon}>✦</div>
              <div>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
