import './../styles/venue.css'

import sky from '../assets/sky.jpg'

import {
  motion
} from 'framer-motion'

const VenueSection = () => {

  return (

    <section className='venue-section'>

      {/* BG */}

      <div className='venue-bg'>

        <img
          src={sky}
          alt=''
        />

      </div>

      {/* OVERLAY */}

      <div className='venue-overlay'></div>

      {/* CONTENT */}

      <motion.div
        className='venue-content'
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
          Wedding Venue
        </h1>

        <p>
          We warmly welcome you to join our celebration
        </p>

        {/* CARD */}

        <div className='venue-card'>

          <h2>
            Vasantham Thirumana Mahal
          </h2>

          <span>
            Pudukkottai, Tamil Nadu
          </span>

          <p>
            Thursday • 28 MAY 2026
          </p>

          {/* BUTTON */}

          <a
            href='https://maps.google.com/?q=Vasantham+Thirumana+Mahal+Pudukkottai'
            target='_blank'
            rel='noreferrer'
          >

            Open Location

          </a>

        </div>

      </motion.div>

      {/* MAP */}

      <motion.div
        className='map-wrapper'
        initial={{
          opacity:0,
          y:80
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          delay:.3,
          duration:1
        }}
      >

        <iframe
          title='map'
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.865338809513!2d78.9816027!3d10.1706806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b006c84dcd484b5%3A0x40de13255aefe83b!2sVasantham%20Thirumana%20Mahal!5e0!3m2!1sen!2sin!4v1778999999999!5m2!1sen!2sin'
        ></iframe>

      </motion.div>

    </section>
  )
}

export default VenueSection