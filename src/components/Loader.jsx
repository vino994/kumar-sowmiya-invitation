import './../styles/loader.css'

import {
  motion
} from 'framer-motion'

import sky from '../assets/sky.jpg'
import temple from '../assets/temple2.png'

const Loader = ({ onEnter }) => {

  return (

    <motion.div
      className='loader-screen'
      initial={{
        opacity:1
      }}
      exit={{
        opacity:0
      }}
      transition={{
        duration:1
      }}
    >

      {/* SKY */}

      <div className='loader-bg'>

        <img
          src={sky}
          alt=''
        />

      </div>

      {/* OVERLAY */}

      <div className='loader-overlay'></div>

      {/* TEMPLE */}

      <motion.img
        src={temple}
        alt=''
        className='loader-temple'
        initial={{
          opacity:0,
          y:80,
          scale:.8
        }}
        animate={{
          opacity:1,
          y:0,
          scale:1
        }}
        transition={{
          duration:1.5
        }}
      />

      {/* CONTENT */}

      <div className='loader-content'>

        <motion.h1
          initial={{
            opacity:0,
            y:30
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            delay:.5,
            duration:1
          }}
        >

          Kumar
          <span> ❤ </span>
          Sowmiya

        </motion.h1>

        <motion.p
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
          transition={{
            delay:1
          }}
        >

          Together with their families

        </motion.p>

        <motion.button
          onClick={onEnter}
          whileHover={{
            scale:1.05
          }}
          whileTap={{
            scale:.95
          }}
          initial={{
            opacity:0,
            y:40
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            delay:1.5
          }}
        >

          Enter With Love

        </motion.button>

      </div>

    </motion.div>
  )
}

export default Loader