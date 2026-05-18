import './../styles/footer.css'
import sky from '../assets/sky.jpg'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

const Footer = () => {

  return (

    <footer className='footer'>

      {/* BG */}
      <div className='footer-bg'>
        <img src={sky} alt='' />
      </div>

      {/* OVERLAY */}
      <div className='footer-overlay' />

      {/* GRAIN */}
      <div className='footer-grain' />

      {/* TOP BORDER LINE */}
      <div className='footer-top-line'>
        <span className='ftl-line' />
        <motion.span
          className='ftl-diamond'
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <span className='ftl-line' />
      </div>

      {/* CONTENT */}
      <div className='footer-content'>

        {/* EYEBROW */}
        <motion.div className='footer-eyebrow' {...fadeUp(0.1)}>
          <span className='fe-line' />
          Forever & Always
          <span className='fe-line fe-line--r' />
        </motion.div>

        {/* NAMES */}
        <motion.h1 className='footer-names' {...fadeUp(0.2)}>
          Kumar
        </motion.h1>

        {/* HEART */}
        <motion.div
          className='footer-heart-wrap'
          {...fadeUp(0.3)}
        >
          <motion.span
            className='footer-heart'
            animate={{ scale: [1, 1.22, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            ❤
          </motion.span>
          <span className='heart-ring heart-ring--1' />
          <span className='heart-ring heart-ring--2' />
        </motion.div>

        <motion.h1 className='footer-names' {...fadeUp(0.38)}>
          Sowmiya
        </motion.h1>

        {/* DIVIDER */}
        <motion.div className='footer-divider' {...fadeUp(0.44)}>
          <span className='fd-line' />
          <span className='fd-diamond' />
          <span className='fd-dot' />
          <span className='fd-diamond' />
          <span className='fd-line fd-line--r' />
        </motion.div>

        {/* QUOTE */}
        <motion.p className='footer-quote' {...fadeUp(0.5)}>
          Thank you for being part of our beautiful journey
        </motion.p>

        {/* TAG */}
        <motion.span className='footer-tag' {...fadeUp(0.56)}>
          With Love • Family & Friends
        </motion.span>

        {/* DATE STAMP */}
        <motion.div className='footer-date' {...fadeUp(0.62)}>
          <span className='footer-date-inner'>
            28 · 05 · 2026
          </span>
        </motion.div>

        {/* BOTTOM FLOURISH */}
        <motion.div className='footer-flourish' {...fadeUp(0.68)}>
          <span className='flourish-line' />
          <motion.span
            className='flourish-leaf'
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            ✦
          </motion.span>
          <span className='flourish-line' />
        </motion.div>

        {/* COPY */}
        <motion.p className='footer-copy' {...fadeUp(0.72)}>
          Kumar & Sowmiya © 2026
        </motion.p>

      </div>

    </footer>
  )
}

export default Footer