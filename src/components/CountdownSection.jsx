import './../styles/countdown.css'

import sky from '../assets/sky.jpg'

import {
  motion
} from 'framer-motion'

import {
  useEffect,
  useState
} from 'react'

const CountdownSection = () => {

  const weddingDate = new Date(
    'May 28, 2026 10:30:00'
  ).getTime()

  const [timeLeft, setTimeLeft] = useState({
    days:0,
    hours:0,
    minutes:0,
    seconds:0
  })

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime()

      const distance =
        weddingDate - now

      const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
      )

      const hours = Math.floor(
        (distance %
        (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      )

      const minutes = Math.floor(
        (distance %
        (1000 * 60 * 60)) /
        (1000 * 60)
      )

      const seconds = Math.floor(
        (distance %
        (1000 * 60)) / 1000
      )

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      })

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (

    <section className='countdown-section'>

      {/* BG */}

      <div className='countdown-bg'>

        <img
          src={sky}
          alt=''
        />

      </div>

      {/* OVERLAY */}

      <div className='countdown-overlay'></div>

      {/* CONTENT */}

      <motion.div
        className='countdown-content'
        initial={{
          opacity:0,
          y:80
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:1
        }}
      >

        <h1>
          Countdown to Forever
        </h1>

        <p>
          The magical moment is getting closer
        </p>

        {/* TIMER */}

        <div className='timer-container'>

          <div className='timer-box'>

            <h2>
              {timeLeft.days}
            </h2>

            <span>
              Days
            </span>

          </div>

          <div className='timer-box'>

            <h2>
              {timeLeft.hours}
            </h2>

            <span>
              Hours
            </span>

          </div>

          <div className='timer-box'>

            <h2>
              {timeLeft.minutes}
            </h2>

            <span>
              Minutes
            </span>

          </div>

          <div className='timer-box'>

            <h2>
              {timeLeft.seconds}
            </h2>

            <span>
              Seconds
            </span>

          </div>

        </div>

      </motion.div>

      {/* DECOR */}

      <div className='countdown-decor-left'>
        ✦
      </div>

      <div className='countdown-decor-right'>
        ✦
      </div>

    </section>
  )
}

export default CountdownSection