import React from 'react'
import styles from './Footer.module.css'
import logo from '../assets/images/Logo/Masari Logo Approved-02.png'

const footerLinks = ['About', 'Treatments', 'Packages', 'Contact', 'Privacy Policy']

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logoImg} />
        <div className={styles.logo}>Masari Wellness and SPA & WELLNESS</div>
      </div>
      <ul className={styles.links}>
        {footerLinks.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)}>{l}</button>
          </li>
        ))}
      </ul>
      <div className={styles.copy}>© 2026 Masari Wellness and Spa & Wellness. All rights reserved.</div>
    </footer>
  )
}
