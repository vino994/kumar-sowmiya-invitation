import './../styles/event.css'

import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion'
import sky from '../assets/sky.jpg'
const EventSection = () => {

  const { scrollY } = useScroll()

  // SECTION ANIMATION

  const opacity = useTransform(
    scrollY,
    [900, 1300],
    [0, 1]
  )

  const y = useTransform(
    scrollY,
    [900, 1300],
    [120, 0]
  )

  return (

    <motion.section
      className='event-section'
      style={{
        opacity,
        y
      }}
    >
{/* SKY BG */}

<div className='event-bg'>

  <img
    src={sky}
    alt=''
  />

</div>

{/* OVERLAY */}

<div className='event-overlay'></div>
      {/* TOP TITLE */}

      <div className='event-title'>

        <motion.h1
          initial={{
            opacity:0,
            y:50
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:1
          }}
        >

          Wedding Celebration

        </motion.h1>

        <p>
          Together with our families,
          we invite you to celebrate our wedding.
        </p>

      </div>

      {/* EVENT CARDS */}

      <div className='event-container'>

        {/* ENGAGEMENT */}

        <motion.div
          className='event-card'
          whileHover={{
            y:-10
          }}
        >

          <span>
            ✨
          </span>

          <h2>
            Engagement
          </h2>

          <h3>
            26 MAY 2026
          </h3>

          <p>
            Tuesday • 6:00 PM
          </p>

          <small>
            Traditional Ceremony & Family Gathering
          </small>

        </motion.div>

        {/* WEDDING */}

        <motion.div
          className='event-card main-card'
          whileHover={{
            y:-10
          }}
        >

          <span>
            💍
          </span>

          <h2>
            Muhurtham
          </h2>

          <h3>
            28 MAY 2026
          </h3>

          <p>
            Thursday • 10:30 AM
          </p>

          <small>
            Wedding Ceremony & Blessings
          </small>

        </motion.div>

        {/* RECEPTION */}

        <motion.div
          className='event-card'
          whileHover={{
            y:-10
          }}
        >

          <span>
            🎉
          </span>

          <h2>
            Reception
          </h2>

          <h3>
            28 MAY 2026
          </h3>

          <p>
            Thursday • 7:00 PM
          </p>

          <small>
            Dinner & Celebration Night
          </small>

        </motion.div>

      </div>

      {/* DECOR */}

      <div className='event-decor-left'>
        ❀
      </div>

      <div className='event-decor-right'>
        ❀
      </div>

    </motion.section>
  )
}

export default EventSection