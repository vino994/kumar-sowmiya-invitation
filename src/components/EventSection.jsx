import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import './../styles/event.css'  // ← adjust path to your project

import sky from '../assets/sky.jpg'

/* ─────────────────────────────────────────
   Particle config — stable across renders
───────────────────────────────────────── */
const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  size:     Math.random() * 4 + 2,
  left:     Math.random() * 100,
  bottom:   Math.random() * 40,
  dx:       (Math.random() - 0.5) * 120,
  duration: Math.random() * 7 + 7,
  delay:    Math.random() * 10,
}))

const RAY_ANGLES = [-46, -30, -16, -6, 0, 6, 16, 30, 46]

/* ─────────────────────────────────────────
   Reusable sub-components
───────────────────────────────────────── */

function Ornament({ delay = 0.4, lineWidth = 70 }) {
  return (
    <motion.div
      className='event-ornament'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.9 }}
    >
      <div className='event-ornament-dot' />
      <div className='event-ornament-line' style={{ width: lineWidth }} />
      <div className='event-ornament-diamond' />
      <div className='event-ornament-line' style={{ width: lineWidth }} />
      <div className='event-ornament-dot' />
    </motion.div>
  )
}

function CardCorners() {
  return (
    <>
      <div className='event-card-corner tl' />
      <div className='event-card-corner tr' />
      <div className='event-card-corner bl' />
      <div className='event-card-corner br' />
    </>
  )
}

function Connector() {
  return (
    <div className='event-connector' aria-hidden='true'>
      <div className='event-connector-line' />
      <div className='event-connector-gem' />
      <div className='event-connector-line' />
    </div>
  )
}

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */

const EventSection = () => {

  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [900, 1300], [0, 1])
  const y       = useTransform(scrollY, [900, 1300], [100, 0])

  return (
    <motion.section
      className='event-section'
      style={{ opacity, y }}
    >

      {/* ── SKY BACKGROUND ── */}
      <div className='event-bg'>
        <img src={sky} alt='' />
      </div>

      {/* ── WARM VIGNETTE ── */}
      <div className='event-overlay' />

      {/* ── LIGHT RAYS ── */}
      <div className='event-rays' aria-hidden='true'>
        {RAY_ANGLES.map((angle, i) => (
          <div
            key={i}
            className='event-ray'
            style={{
              transform:      `rotate(${angle}deg)`,
              animationDelay: `${i * 0.22}s`,
              opacity:        0.4 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* ── FLOATING PARTICLES ── */}
      <div className='event-particles' aria-hidden='true'>
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className='event-particle'
            style={{
              width:             `${p.size}px`,
              height:            `${p.size}px`,
              left:              `${p.left}%`,
              bottom:            `${p.bottom}%`,
              '--ep-dx':         `${p.dx}px`,
              animationDuration: `${p.duration}s`,
              animationDelay:    `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── SIDE FLORAL DECOR ── */}
      <div className='event-decor event-decor-left'  aria-hidden='true'>❧</div>
      <div className='event-decor event-decor-right' aria-hidden='true'>❧</div>

      {/* ── SECTION HEADER ── */}
      <header className='event-header'>

        <motion.span
          className='event-eyebrow'
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9 }}
        >
          Kumar &amp; Sowmiya
        </motion.span>

        <Ornament delay={0.35} />

        <motion.h1
          className='event-title'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.1 }}
        >
          Wedding Celebration
        </motion.h1>

        <motion.p
          className='event-subtitle'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          Together with our families, we invite you to celebrate our sacred union
        </motion.p>

      </header>

      {/* ── EVENT CARDS ── */}
      <div className='event-cards'>

        {/* ENGAGEMENT */}
        <motion.div
          className='event-card'
          style={{ animationDelay: '0.3s' }}
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <CardCorners />

          <div className='event-icon-wrap'>
            <span className='event-icon' aria-hidden='true'>✨</span>
          </div>

          <div className='event-card-label'>Event One</div>
          <div className='event-card-name'>Engagement</div>
          <div className='event-card-date'>26 MAY 2026</div>
          <div className='event-card-divider' />
          <div className='event-card-time'>Tuesday · 6:00 PM</div>
          <div className='event-card-desc'>
            Traditional Ceremony<br />& Family Gathering
          </div>
        </motion.div>

        <Connector />

        {/* MUHURTHAM — featured */}
        <motion.div
          className='event-card event-card-main'
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          <div className='event-card-badge'>Auspicious Day</div>
          <CardCorners />

          <div className='event-icon-wrap' style={{ borderColor: 'rgba(212,175,55,.45)' }}>
            <span className='event-icon' aria-hidden='true'>💍</span>
          </div>

          <div className='event-card-label'>Main Ceremony</div>
          <div className='event-card-name event-card-name-lg'>Muhurtham</div>
          <div className='event-card-date event-card-date-lg'>28 MAY 2026</div>
          <div className='event-card-divider event-card-divider-wide' />
          <div className='event-card-time'>Thursday · 10:30 AM</div>
          <div className='event-card-desc'>
            Wedding Ceremony<br />& Sacred Blessings
          </div>
        </motion.div>

        <Connector />

        {/* RECEPTION */}
        <motion.div
          className='event-card'
          style={{ animationDelay: '0.7s' }}
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.9 }}
        >
          <CardCorners />

          <div className='event-icon-wrap'>
            <span className='event-icon' aria-hidden='true'>🎉</span>
          </div>

          <div className='event-card-label'>Event Three</div>
          <div className='event-card-name'>Reception</div>
          <div className='event-card-date'>28 MAY 2026</div>
          <div className='event-card-divider' />
          <div className='event-card-time'>Thursday · 7:00 PM</div>
          <div className='event-card-desc'>
            Dinner, Music<br />& Celebration Night
          </div>
        </motion.div>

      </div>

      {/* ── BOTTOM MOTIF ── */}
      <motion.div
        className='event-bottom'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.9 }}
      >
        <Ornament delay={0} lineWidth={100} />
        <div className='event-bottom-text'>With love &amp; blessings</div>
      </motion.div>

    </motion.section>
  )
}

export default EventSection