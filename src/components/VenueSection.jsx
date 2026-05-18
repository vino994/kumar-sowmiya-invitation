import './../styles/venue.css'
import sky from '../assets/sky.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const PinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 55 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] },
})

const VenueSection = () => {

  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section ref={sectionRef} className='venue-section'>

      {/* BG */}
      <div className='venue-bg'>
        <motion.img
          src={sky}
          alt=''
          style={{ y: bgY }}
        />
      </div>

      {/* GRAIN */}
      <div className='venue-grain' />

      {/* OVERLAY */}
      <div className='venue-overlay' />

      {/* ORBS */}
      <motion.div
        className='venue-orb venue-orb--1'
        animate={{ scale: [1, 1.14, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='venue-orb venue-orb--2'
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* CONTENT */}
      <motion.div className='venue-content' {...fadeUp(0)}>

        {/* EYEBROW */}
        <motion.div className='venue-eyebrow' {...fadeUp(0.1)}>
          <span className='eyebrow-line' />
          You Are Invited
          <span className='eyebrow-line eyebrow-line--r' />
        </motion.div>

        {/* HEADING */}
        <motion.h1 className='venue-heading' {...fadeUp(0.18)}>
          Wedding Venue
        </motion.h1>

        {/* SUB */}
        <motion.p className='venue-sub' {...fadeUp(0.25)}>
          We warmly welcome you to join our celebration
        </motion.p>

        {/* DIVIDER */}
        <motion.div className='venue-divider' {...fadeUp(0.3)}>
          <span className='div-line' />
          <span className='div-diamond' />
          <span className='div-line div-line--r' />
        </motion.div>

        {/* CARD */}
        <motion.div className='venue-card' {...fadeUp(0.36)}>

          <span className='card-sheen' />

          <h2 className='card-name'>
            Vasantham Thirumana Mahal
          </h2>

          <span className='card-location'>
            <PinIcon />
            Pudukkottai, Tamil Nadu
          </span>

          <div className='card-date-row'>
            <div className='card-date-box'>
              <span className='date-label'>Thursday</span>
              <span className='date-big'>28</span>
            </div>
            <span className='date-sep' />
            <div className='card-date-box'>
              <span className='date-month'>May</span>
              <span className='date-year'>2026</span>
            </div>
          </div>

          {/* BUTTON */}
          <motion.a
            href='https://maps.google.com/?q=Vasantham+Thirumana+Mahal+Pudukkottai'
            target='_blank'
            rel='noreferrer'
            className='card-btn'
            whileHover={{ y: -4, boxShadow: '0 16px 44px rgba(232,185,106,.55)' }}
            whileTap={{ scale: 0.97 }}
          >
            Open in Maps
            <ArrowIcon />
          </motion.a>

        </motion.div>

      </motion.div>

      {/* MAP */}
      <motion.div className='map-wrapper' {...fadeUp(0.48)}>
        <span className='map-top-line' />
        <iframe
          title='map'
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.865338809513!2d78.9816027!3d10.1706806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b006c84dcd484b5%3A0x40de13255aefe83b!2sVasantham%20Thirumana%20Mahal!5e0!3m2!1sen!2sin!4v1778999999999!5m2!1sen!2sin'
        />
      </motion.div>

    </section>
  )
}

export default VenueSection