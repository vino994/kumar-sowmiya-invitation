import './../styles/couple.css'

import couple from '../assets/couple-2.png'
import sky from '../assets/sky.jpg'
import temple from '../assets/temple2.png'

import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion'

const CoupleSection = () => {

  const { scrollY } = useScroll()

  // SECTION APPEAR

  const opacity = useTransform(
    scrollY,
    [350, 700],
    [0, 1]
  )

  // TEMPLE MOVE RIGHT

  const templeX = useTransform(
    scrollY,
    [350, 900],
    [0, 350]
  )

  const templeScale = useTransform(
    scrollY,
    [350, 900],
    [1, 1.1]
  )

  // COUPLE ENTER LEFT

  const coupleX = useTransform(
    scrollY,
    [350, 900],
    [-300, 0]
  )

  const coupleOpacity = useTransform(
    scrollY,
    [350, 700],
    [0, 1]
  )

  // TEXT ENTER

  const textY = useTransform(
    scrollY,
    [350, 900],
    [100, 0]
  )

  return (

    <motion.section
      className='couple-section'
      style={{
        opacity
      }}
    >

      {/* SKY BG */}

      <div className='couple-bg'>

        <img
          src={sky}
          alt=''
        />

      </div>

      {/* OVERLAY */}

      <div className='couple-overlay'></div>

      {/* TEMPLE */}

      <motion.div
        className='couple-temple'
        style={{
          x: templeX,
          scale: templeScale
        }}
      >

        <img
          src={temple}
          alt=''
        />

      </motion.div>

      {/* CONTENT */}

      <div className='couple-content'>

        {/* IMAGE */}

        <motion.div
          className='couple-image'
          style={{
            x: coupleX,
            opacity: coupleOpacity
          }}
        >

          <img
            src={couple}
            alt=''
          />

        </motion.div>

        {/* TEXT */}

        <motion.div
          className='couple-text'
          style={{
            y: textY,
            opacity: coupleOpacity
          }}
        >

          <h2>
            Kumar
            <span>❤</span>
            Sowmiya
          </h2>

          <p>
            Two souls, one beautiful forever.
          </p>

          <div className='line'></div>

          <h3>
            Wedding Celebration
          </h3>

        </motion.div>

      </div>

      {/* PARTICLES */}

      <div className='couple-particles'></div>

    </motion.section>
  )
}

export default CoupleSection