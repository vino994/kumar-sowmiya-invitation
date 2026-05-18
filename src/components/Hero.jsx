import './../styles/hero.css'

import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion'

import sky from '../assets/sky.jpg'
import temple from '../assets/temple2.png'

const Hero = () => {

  const { scrollY } = useScroll()

  // SKY SCALE

  const skyScale = useTransform(
    scrollY,
    [0, 500],
    [1, 1.1]
  )

  // TEMPLE SCALE

  const templeScale = useTransform(
    scrollY,
    [0, 500],
    [1, 1.25]
  )

  // BLUR

  const blur = useTransform(
    scrollY,
    [0, 500],
    ['blur(0px)', 'blur(10px)']
  )

  // OPACITY

  const opacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0]
  )

  // TEMPLE MOVE

const templeY = useTransform(
  scrollY,
  [0, 0],
  [0, 0]
)

  return (

    <motion.section
      className='hero'
      style={{
        opacity
      }}
    >

      {/* SKY */}

      <motion.div
        className='sky-bg'
        style={{
          scale: skyScale
        }}
      >

        <img
          src={sky}
          alt=''
        />

      </motion.div>

      {/* OVERLAY */}

      <div className='hero-overlay'></div>

      {/* TEMPLE */}

      <motion.div
        className='temple-wrapper'
        style={{
          scale: templeScale,
          filter: blur,
          y: templeY
        }}
      >

        <img
          src={temple}
          alt=''
          className='temple-img'
        />

      </motion.div>

      {/* TOP CONTENT */}

   {/* TOP CONTENT */}

<div className='top-content'>

  {/* SAVE TEXT */}

  <motion.p
    className='save-text'
    initial={{
      opacity:0,
      scale:.4,
      filter:'blur(12px)'
    }}
    animate={{
      opacity:1,
      scale:1,
      filter:'blur(0px)'
    }}
    transition={{
      duration:2,
      ease:'easeOut'
    }}
  >

    Save the Date

  </motion.p>

  {/* COUPLE NAME */}

  <div className='couple-name-wrap'>

    {/* LEFT */}

    <motion.span
      className='name-left'
      initial={{
        opacity:0,
        x:-250
      }}
      animate={{
        opacity:1,
        x:0
      }}
      transition={{
        delay:.8,
        duration:1.4,
        ease:'easeOut'
      }}
    >

      Kumar

    </motion.span>

    {/* CENTER */}

    <motion.span
      className='middle-heart'
      initial={{
        opacity:0,
        scale:0,
        rotate:-180
      }}
      animate={{
        opacity:1,
        scale:1,
        rotate:0
      }}
      transition={{
        delay:1.3,
        duration:1
      }}
    >

      &

    </motion.span>

    {/* RIGHT */}

    <motion.span
      className='name-right'
      initial={{
        opacity:0,
        x:250
      }}
      animate={{
        opacity:1,
        x:0
      }}
      transition={{
        delay:1,
        duration:1.4,
        ease:'easeOut'
      }}
    >

      Sowmiya

    </motion.span>

  </div>

  {/* DATE */}

  <motion.h3
    className='hero-date'
    initial={{
      opacity:0,
      letterSpacing:'20px',
      y:40
    }}
    animate={{
      opacity:1,
      letterSpacing:'5px',
      y:0
    }}
    transition={{
      delay:1.8,
      duration:1.3
    }}
  >

    November 12, 2026

  </motion.h3>

</div>

      {/* INVITATION CARD */}

      <motion.div
        className='date-box'
        initial={{
          opacity:0,
          scale:.8
        }}
        animate={{
          opacity:1,
          scale:1
        }}
        transition={{
          delay:1.5,
          duration:1
        }}
      >

        <p>
          YOU ARE CORDIALLY INVITED
        </p>

        <h2>
          28 MAY 2026
        </h2>

        <span>
          Thursday • 10:30 AM
        </span>

      </motion.div>

      {/* FLOWER DECOR */}

      <div className='flower-left'>
        ❀
      </div>

      <div className='flower-right'>
        ❀
      </div>

      {/* PARTICLES */}

      <div className='particles'></div>

    </motion.section>
  )
}

export default Hero