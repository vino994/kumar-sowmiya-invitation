import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import './../styles/loader.css'   // ← adjust path to match your project

import sky    from '../assets/sky.jpg'
import temple from '../assets/temple2.png'

/* ─────────────────────────────────────────────
   Particle data — generated once on mount
───────────────────────────────────────────── */
const PARTICLE_COUNT = 28

function makeParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    size:     Math.random() * 5 + 2,
    left:     Math.random() * 100,
    bottom:   Math.random() * 35,
    dx:       (Math.random() - 0.5) * 130,
    duration: Math.random() * 6 + 7,
    delay:    Math.random() * 9,
  }))
}

const particles = makeParticles()

/* ─────────────────────────────────────────────
   Mandala SVG — pure vector, no assets needed
───────────────────────────────────────────── */
function Mandala() {
  return (
    <svg
      width="620"
      height="620"
      viewBox="0 0 620 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(310,310)">
        {/* Rings */}
        <circle r="55"  stroke="#d4af37" strokeWidth="0.5" fill="none" />
        <circle r="95"  stroke="#d4af37" strokeWidth="0.3" fill="none" strokeDasharray="4 8" />
        <circle r="148" stroke="#d4af37" strokeWidth="0.5" fill="none" />
        <circle r="205" stroke="#d4af37" strokeWidth="0.3" fill="none" strokeDasharray="2 6" />
        <circle r="268" stroke="#d4af37" strokeWidth="0.5" fill="none" />

        {/* Inner petals — 8× */}
        {[0,45,90,135,180,225,270,315].map(deg => (
          <g key={deg} transform={`rotate(${deg})`}>
            <ellipse cx="0" cy="-77" rx="12" ry="23"
              fill="rgba(212,175,55,0.12)" stroke="#d4af37" strokeWidth="0.4" />
          </g>
        ))}

        {/* Outer petals — 12× */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map(deg => (
          <g key={deg} transform={`rotate(${deg})`}>
            <ellipse cx="0" cy="-178" rx="10" ry="28"
              fill="rgba(212,175,55,0.07)" stroke="#d4af37" strokeWidth="0.3" />
          </g>
        ))}

        {/* Diamond tips — 8× */}
        {[0,45,90,135,180,225,270,315].map(deg => (
          <g key={deg} transform={`rotate(${deg})`}>
            <rect x="-3" y="-268" width="6" height="6"
              transform="rotate(45,0,-265)"
              fill="#d4af37" opacity="0.45" />
          </g>
        ))}
      </g>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   Ornament bar
───────────────────────────────────────────── */
function Ornament({ delay = 1 }) {
  return (
    <motion.div
      className="loader-ornament"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
    >
      <div className="loader-ornament-dot" />
      <div className="loader-ornament-line" />
      <div className="loader-ornament-diamond" />
      <div className="loader-ornament-line" />
      <div className="loader-ornament-dot" />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   Main Loader
───────────────────────────────────────────── */
const Loader = ({ onEnter }) => {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >

      {/* ── SKY BACKGROUND ── */}
      <div className="loader-bg">
        <img src={sky} alt="" />
      </div>

      {/* ── WARM VIGNETTE OVERLAY ── */}
      <div className="loader-overlay" />

      {/* ── LIGHT RAYS ── */}
      <div className="loader-rays" aria-hidden="true">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="loader-ray" />
        ))}
      </div>

      {/* ── FLOATING PARTICLES ── */}
      <div className="loader-particles" aria-hidden="true">
        {particles.map(p => (
          <div
            key={p.id}
            className="loader-particle"
            style={{
              width:               `${p.size}px`,
              height:              `${p.size}px`,
              left:                `${p.left}%`,
              bottom:              `${p.bottom}%`,
              '--p-dx':            `${p.dx}px`,
              animationDuration:   `${p.duration}s`,
              animationDelay:      `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── MANDALA ── */}
      <div className="loader-mandala" aria-hidden="true">
        <Mandala />
      </div>

      {/* ── AMBIENT GLOW ── */}
      <div className="loader-glow" aria-hidden="true" />

      {/* ── TEMPLE ── */}
      <motion.img
        src={temple}
        alt=""
        className="loader-temple"
        initial={{ opacity: 0, y: 80, scale: 0.85 }}
        animate={{ opacity: 1, y: 0,  scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="loader-content">

        {/* Top tagline */}
        <motion.div
          className="loader-tagline"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          A Sacred Union
        </motion.div>

        <Ornament delay={0.8} />

        {/* Names */}
        <motion.div
          className="loader-name loader-name-kumar"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1 }}
        >
          Kumar
        </motion.div>

        <motion.span
          className="loader-connector"
          initial={{ opacity: 0, scale: 0.65 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          weds
        </motion.span>

        <motion.div
          className="loader-name loader-name-sowmiya"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.1 }}
        >
          Sowmiya
        </motion.div>

        <Ornament delay={1.2} />

        {/* Together line */}
        <motion.div
          className="loader-date"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
        >
          Together with their families
        </motion.div>

        <motion.div
          className="loader-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.55, duration: 0.9 }}
        >
          The beginning of forever
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="loader-btn"
          onClick={onEnter}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.9 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="loader-btn-inner">
            <div className="loader-btn-corner tl" />
            <div className="loader-btn-corner tr" />
            <div className="loader-btn-corner bl" />
            <div className="loader-btn-corner br" />
            Enter With Love
            <div className="loader-btn-arrow" />
          </div>
        </motion.button>

      </div>

      {/* ── MARQUEE ── */}
      <div className="loader-marquee" aria-hidden="true">
        <div className="loader-marquee-inner">
          {/* Duplicate for seamless loop */}
          {[0, 1].map(n => (
            <span key={n}>
              Kumar &amp; Sowmiya &nbsp;✦&nbsp; A Sacred Union &nbsp;✦&nbsp; Together Forever &nbsp;✦&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  )
}

export default Loader