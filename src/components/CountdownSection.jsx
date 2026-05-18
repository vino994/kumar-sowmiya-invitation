import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import './../styles/countdown.css'   // ← adjust path to your project

import sky from '../assets/sky.jpg'

/* ─────────────────────────────────────────
   Static config — stable across renders
───────────────────────────────────────── */

const WEDDING_DATE = new Date('May 28, 2026 10:30:00').getTime()

const RAY_ANGLES = [-44, -29, -15, -5, 0, 5, 15, 29, 44]

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size:     Math.random() * 4 + 2,
  left:     Math.random() * 100,
  bottom:   Math.random() * 35,
  dx:       (Math.random() - 0.5) * 120,
  duration: Math.random() * 7 + 7,
  delay:    Math.random() * 10,
}))

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */

function pad(n) {
  return String(Math.max(0, n)).padStart(2, '0')
}

function calcTimeLeft() {
  const diff = WEDDING_DATE - Date.now()
  if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' }
  return {
    days:    pad(Math.floor(diff / 86_400_000)),
    hours:   pad(Math.floor(diff % 86_400_000 / 3_600_000)),
    minutes: pad(Math.floor(diff % 3_600_000  /    60_000)),
    seconds: pad(Math.floor(diff %    60_000  /     1_000)),
  }
}

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

function Ornament({ lineWidth = 70 }) {
  return (
    <div className='countdown-ornament'>
      <div className='countdown-ornament-dot' />
      <div className='countdown-ornament-line' style={{ width: lineWidth }} />
      <div className='countdown-ornament-diamond' />
      <div className='countdown-ornament-line' style={{ width: lineWidth }} />
      <div className='countdown-ornament-dot' />
    </div>
  )
}

function BoxCorners() {
  return (
    <>
      <div className='countdown-box-corner tl' />
      <div className='countdown-box-corner tr' />
      <div className='countdown-box-corner bl' />
      <div className='countdown-box-corner br' />
    </>
  )
}

function Separator() {
  return (
    <div className='countdown-sep' aria-hidden='true'>
      <div className='countdown-sep-dot' />
      <div className='countdown-sep-dot' />
    </div>
  )
}

function TimerBox({ value, label }) {
  const prevRef = useRef(value)
  const numRef  = useRef(null)

  // Micro-bounce on seconds change
  useEffect(() => {
    if (value !== prevRef.current && numRef.current) {
      numRef.current.style.transform = 'scale(1.08)'
      setTimeout(() => {
        if (numRef.current) numRef.current.style.transform = 'scale(1)'
      }, 140)
    }
    prevRef.current = value
  }, [value])

  return (
    <div className='countdown-box'>
      <BoxCorners />
      <div className='countdown-number' ref={numRef}>{value}</div>
      <div className='countdown-unit-line' />
      <div className='countdown-label'>{label}</div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */

const CountdownSection = () => {

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  /* Optional scroll-driven entrance — same pattern as your other sections */
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [1600, 2100], [0, 1])
  const y       = useTransform(scrollY, [1600, 2100], [80, 0])

  return (
    <motion.section
      className='countdown-section'
      style={{ opacity, y }}
    >

      {/* ── SKY BACKGROUND ── */}
      <div className='countdown-bg'>
        <img src={sky} alt='' />
      </div>

      {/* ── VIGNETTE OVERLAY ── */}
      <div className='countdown-overlay' />

      {/* ── LIGHT RAYS ── */}
      <div className='countdown-rays' aria-hidden='true'>
        {RAY_ANGLES.map((angle, i) => (
          <div
            key={i}
            className='countdown-ray'
            style={{
              transform:      `rotate(${angle}deg)`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      {/* ── FLOATING PARTICLES ── */}
      <div className='countdown-particles' aria-hidden='true'>
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className='countdown-particle'
            style={{
              width:             `${p.size}px`,
              height:            `${p.size}px`,
              left:              `${p.left}%`,
              bottom:            `${p.bottom}%`,
              '--cd-dx':         `${p.dx}px`,
              animationDuration: `${p.duration}s`,
              animationDelay:    `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── SIDE FLORAL DECOR ── */}
      <div className='countdown-decor countdown-decor-left'  aria-hidden='true'>❧</div>
      <div className='countdown-decor countdown-decor-right' aria-hidden='true'>❧</div>

      {/* ── CONTENT ── */}
      <div className='countdown-content'>

        {/* Eyebrow */}
        <motion.span
          className='countdown-eyebrow'
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9 }}
        >
          Kumar &amp; Sowmiya · 28 May 2026
        </motion.span>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <Ornament />
        </motion.div>

        {/* Title */}
        <motion.h1
          className='countdown-title'
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.1 }}
        >
          Countdown to Forever
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className='countdown-subtitle'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.9 }}
        >
          The sacred moment grows closer with every breath
        </motion.p>

        {/* Timer */}
        <motion.div
          className='countdown-timer'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <TimerBox value={timeLeft.days}    label='Days'    />
          <Separator />
          <TimerBox value={timeLeft.hours}   label='Hours'   />
          <Separator />
          <TimerBox value={timeLeft.minutes} label='Minutes' />
          <Separator />
          <TimerBox value={timeLeft.seconds} label='Seconds' />
        </motion.div>

        {/* Bottom motif */}
        <motion.div
          className='countdown-bottom'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.9 }}
        >
          <Ornament lineWidth={100} />
          <div className='countdown-bottom-text'>
            With love &amp; blessings · Muhurtham 10:30 AM
          </div>
        </motion.div>

      </div>

    </motion.section>
  )
}

export default CountdownSection