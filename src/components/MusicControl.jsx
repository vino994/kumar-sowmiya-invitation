import './../styles/music.css'

import {
  useState
} from 'react'

import {
  motion
} from 'framer-motion'

const MusicControl = ({ audioRef }) => {

  const [playing, setPlaying] = useState(true)

  const toggleMusic = () => {

    if (playing) {

      audioRef.current.pause()

    } else {

      audioRef.current.play()

    }

    setPlaying(!playing)
  }

  return (

    <motion.div
      className='music-control'
      initial={{
        opacity:0,
        scale:0
      }}
      animate={{
        opacity:1,
        scale:1
      }}
      transition={{
        delay:1
      }}
      whileHover={{
        scale:1.08
      }}
      onClick={toggleMusic}
    >

      {/* RING */}

      <div className={playing
        ? 'music-ring active'
        : 'music-ring'
      }></div>

      {/* ICON */}

      <span>

        {playing ? '♫' : '🔇'}

      </span>

    </motion.div>
  )
}

export default MusicControl