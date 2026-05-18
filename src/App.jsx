import { useRef, useState } from 'react'

import Hero from './components/Hero'
import CoupleSection from './components/CoupleSection'
import EventSection from './components/EventSection'
import CountdownSection from './components/CountdownSection'
import VenueSection from './components/VenueSection'
import Footer from './components/Footer'
import Loader from './components/Loader'
import MusicControl from './components/MusicControl'
import musicFile from './assets/marriage.mp3'

function App() {

  const [entered, setEntered] = useState(false)

  const audioRef = useRef(null)

  const handleEnter = () => {

    setEntered(true)

    audioRef.current.play()
  }

  return (

    <>

      {/* MUSIC */}

      <audio
        ref={audioRef}
        loop
      >

        <source
          src={musicFile}
          type='audio/mp3'
        />

      </audio>

      {/* LOADER */}

      {!entered && (

        <Loader
          onEnter={handleEnter}
        />

      )}
{entered && (

  <MusicControl
    audioRef={audioRef}
  />

)}
      {/* WEBSITE */}

      {entered && (

        <div className='app-wrapper'>

          <Hero />

          <CoupleSection />

          <EventSection />

          <CountdownSection />

          <VenueSection />

          <Footer />

        </div>

      )}

    </>

  )
}

export default App