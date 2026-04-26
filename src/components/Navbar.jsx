import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Treatments', 'Packages', 'Experience', 'Testimonials', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo} onClick={e => { e.preventDefault(); handleNav('hero') }}>
          MASARI WELLNESS AND  <span>SPA</span>
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l}>
              <button onClick={() => handleNav(l)}>{l}</button>
            </li>
          ))}
        </ul>

        <button className={styles.bookBtn} onClick={() => handleNav('contact')}>
          Book Now
        </button>

        <button
          className={`${styles.toggle} ${menuOpen ? styles.toggleOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l}>
              <button onClick={() => handleNav(l)}>{l}</button>
            </li>
          ))}
        </ul>
        <button className={styles.mobileBook} onClick={() => handleNav('contact')}>
          Book Now
        </button>
      </div>
    </>
  )
}
