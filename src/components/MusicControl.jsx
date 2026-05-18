import './../styles/music.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.93 }}
      onClick={toggleMusic}
    >

      {/* OUTER ROTATING RING */}
      <motion.div
        className='music-orbit'
        animate={{ rotate: playing ? 360 : 0 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <span className='music-orbit-dot' />
      </motion.div>

      {/* INNER ROTATING RING */}
      <motion.div
        className='music-orbit music-orbit--inner'
        animate={{ rotate: playing ? -360 : 0 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      >
        <span className='music-orbit-dot music-orbit-dot--sm' />
      </motion.div>

      {/* PULSE RING */}
      {playing && (
        <>
          <span className='music-pulse music-pulse--1' />
          <span className='music-pulse music-pulse--2' />
        </>
      )}

      {/* CENTRE ICON */}
      <div className='music-icon-wrap'>
        <AnimatePresence mode='wait'>
          {playing ? (
            <motion.div
              key='playing'
              className='music-icon'
              initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.4, rotate: 30 }}
              transition={{ duration: 0.3 }}
            >
              {/* vinyl / music note SVG */}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#f7d0a1" strokeWidth="1.2" />
                <circle cx="12" cy="12" r="3.5" fill="#f7d0a1" opacity="0.9" />
                <circle cx="12" cy="12" r="1.2" fill="#1a100a" />
                <path d="M9 5.5 Q12 3 15 5.5" stroke="#f7d0a1" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
                <path d="M9 18.5 Q12 21 15 18.5" stroke="#f7d0a1" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
                <path d="M5.5 9 Q3 12 5.5 15" stroke="#f7d0a1" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
                <path d="M18.5 9 Q21 12 18.5 15" stroke="#f7d0a1" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key='paused'
              className='music-icon'
              initial={{ opacity: 0, scale: 0.4, rotate: 30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.4, rotate: -30 }}
              transition={{ duration: 0.3 }}
            >
              {/* muted SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 3 L12 21" stroke="rgba(247,208,161,0.3)" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M6 6 L18 18" stroke="#f7d0a1" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9.5" stroke="rgba(247,208,161,0.35)" strokeWidth="1.2" />
                <circle cx="12" cy="12" r="2.5" fill="rgba(247,208,161,0.4)" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.div>
  )
}

export default MusicControl