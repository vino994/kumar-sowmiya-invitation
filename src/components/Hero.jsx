import './../styles/hero.css'

import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion'

import sky from '../assets/sky.jpg'
import temple from '../assets/temple2.png'

/* ─── SVG Decorations ─── */

const LotusLeft = () => (
  <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="lotus-svg lotus-svg--left">
    <g opacity="0.92">
      <path d="M80 195 Q78 160 80 120" stroke="#c8973a" strokeWidth="1.5" fill="none"/>
      <path d="M80 150 Q50 140 30 155 Q55 138 80 150Z" fill="#c8973a" opacity="0.5"/>
      <path d="M80 150 Q110 140 130 155 Q105 138 80 150Z" fill="#c8973a" opacity="0.5"/>
      <path d="M80 120 Q60 105 55 85 Q72 102 80 120Z" fill="#e8b86d" opacity="0.7"/>
      <path d="M80 120 Q100 105 105 85 Q88 102 80 120Z" fill="#e8b86d" opacity="0.7"/>
      <path d="M80 120 Q45 110 40 90 Q62 108 80 120Z" fill="#d4964a" opacity="0.55"/>
      <path d="M80 120 Q115 110 120 90 Q98 108 80 120Z" fill="#d4964a" opacity="0.55"/>
      <path d="M80 108 Q68 88 68 65 Q76 88 80 108Z" fill="#f0c878" opacity="0.8"/>
      <path d="M80 108 Q92 88 92 65 Q84 88 80 108Z" fill="#f0c878" opacity="0.8"/>
      <path d="M80 108 Q55 90 50 68 Q68 88 80 108Z" fill="#e0aa55" opacity="0.65"/>
      <path d="M80 108 Q105 90 110 68 Q92 88 80 108Z" fill="#e0aa55" opacity="0.65"/>
      <path d="M80 95 Q72 72 75 50 Q79 72 80 95Z" fill="#fad88a" opacity="0.9"/>
      <path d="M80 95 Q88 72 85 50 Q81 72 80 95Z" fill="#fad88a" opacity="0.9"/>
      <path d="M80 95 Q62 75 60 52 Q72 74 80 95Z" fill="#f0c060" opacity="0.7"/>
      <path d="M80 95 Q98 75 100 52 Q88 74 80 95Z" fill="#f0c060" opacity="0.7"/>
      <circle cx="80" cy="88" r="9" fill="#fbecc8" opacity="0.95"/>
      <circle cx="80" cy="88" r="5" fill="#c8973a"/>
      <circle cx="80" cy="88" r="2.5" fill="#fff5d6"/>
    </g>
  </svg>
)

const LotusRight = () => (
  <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="lotus-svg lotus-svg--right">
    <g opacity="0.92">
      <path d="M80 195 Q78 160 80 120" stroke="#c8973a" strokeWidth="1.5" fill="none"/>
      <path d="M80 150 Q50 140 30 155 Q55 138 80 150Z" fill="#c8973a" opacity="0.5"/>
      <path d="M80 150 Q110 140 130 155 Q105 138 80 150Z" fill="#c8973a" opacity="0.5"/>
      <path d="M80 120 Q60 105 55 85 Q72 102 80 120Z" fill="#e8b86d" opacity="0.7"/>
      <path d="M80 120 Q100 105 105 85 Q88 102 80 120Z" fill="#e8b86d" opacity="0.7"/>
      <path d="M80 120 Q45 110 40 90 Q62 108 80 120Z" fill="#d4964a" opacity="0.55"/>
      <path d="M80 120 Q115 110 120 90 Q98 108 80 120Z" fill="#d4964a" opacity="0.55"/>
      <path d="M80 108 Q68 88 68 65 Q76 88 80 108Z" fill="#f0c878" opacity="0.8"/>
      <path d="M80 108 Q92 88 92 65 Q84 88 80 108Z" fill="#f0c878" opacity="0.8"/>
      <path d="M80 108 Q55 90 50 68 Q68 88 80 108Z" fill="#e0aa55" opacity="0.65"/>
      <path d="M80 108 Q105 90 110 68 Q92 88 80 108Z" fill="#e0aa55" opacity="0.65"/>
      <path d="M80 95 Q72 72 75 50 Q79 72 80 95Z" fill="#fad88a" opacity="0.9"/>
      <path d="M80 95 Q88 72 85 50 Q81 72 80 95Z" fill="#fad88a" opacity="0.9"/>
      <path d="M80 95 Q62 75 60 52 Q72 74 80 95Z" fill="#f0c060" opacity="0.7"/>
      <path d="M80 95 Q98 75 100 52 Q88 74 80 95Z" fill="#f0c060" opacity="0.7"/>
      <circle cx="80" cy="88" r="9" fill="#fbecc8" opacity="0.95"/>
      <circle cx="80" cy="88" r="5" fill="#c8973a"/>
      <circle cx="80" cy="88" r="2.5" fill="#fff5d6"/>
    </g>
  </svg>
)

const KolamDivider = () => (
  <svg viewBox="0 0 500 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="kolam-divider">
    <polygon points="250,4 258,18 250,32 242,18" fill="#c8973a" opacity="0.9"/>
    <line x1="265" y1="18" x2="490" y2="18" stroke="#c8973a" strokeWidth="0.8" opacity="0.5"/>
    <line x1="235" y1="18" x2="10" y2="18" stroke="#c8973a" strokeWidth="0.8" opacity="0.5"/>
    {[295, 330, 365, 400, 435].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="18" r="2.5" fill="#c8973a" opacity="0.7"/>
        <circle cx={x} cy="18" r="5" stroke="#c8973a" strokeWidth="0.6" fill="none" opacity="0.4"/>
      </g>
    ))}
    {[205, 170, 135, 100, 65].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="18" r="2.5" fill="#c8973a" opacity="0.7"/>
        <circle cx={x} cy="18" r="5" stroke="#c8973a" strokeWidth="0.6" fill="none" opacity="0.4"/>
      </g>
    ))}
    {[280, 313, 347, 380, 414, 448].map((x, i) => (
      <polygon key={i} points={`${x},15 ${x+3},18 ${x},21 ${x-3},18`} fill="#c8973a" opacity="0.45"/>
    ))}
    {[220, 187, 153, 120, 86, 52].map((x, i) => (
      <polygon key={i} points={`${x},15 ${x+3},18 ${x},21 ${x-3},18`} fill="#c8973a" opacity="0.45"/>
    ))}
  </svg>
)

const ArchDecor = () => (
  <svg viewBox="0 0 700 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="arch-decor">
    <path d="M10,75 Q175,10 350,5 Q525,10 690,75" stroke="#c8973a" strokeWidth="1.2" fill="none" opacity="0.6"/>
    <path d="M40,75 Q175,25 350,20 Q525,25 660,75" stroke="#c8973a" strokeWidth="0.6" fill="none" opacity="0.35"/>
    {[70,120,170,220,270,320,370,420,470,520,570,620].map((x, i) => {
      const y = 5 + Math.abs(Math.sin(((x-350)/340) * Math.PI * 0.9)) * 65
      return (
        <g key={i}>
          <circle cx={x} cy={y+5} r="2" fill="#e8b86d" opacity="0.7"/>
          <line x1={x} y1={y} x2={x} y2={y+5} stroke="#c8973a" strokeWidth="0.8" opacity="0.5"/>
        </g>
      )
    })}
    <circle cx="10" cy="75" r="5" fill="#c8973a" opacity="0.7"/>
    <circle cx="690" cy="75" r="5" fill="#c8973a" opacity="0.7"/>
    <circle cx="350" cy="5" r="5" fill="#e8b86d" opacity="0.9"/>
    <circle cx="350" cy="5" r="9" stroke="#c8973a" strokeWidth="0.8" fill="none" opacity="0.5"/>
  </svg>
)

const OmSymbol = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="om-symbol">
    <text x="30" y="46" textAnchor="middle" fontSize="42" fontFamily="serif" fill="#c8973a" opacity="0.85">ॐ</text>
  </svg>
)

/* ─── Detect mobile for conditional scroll ranges ─── */
const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 768

const Hero = () => {

  const { scrollY } = useScroll()

  // On mobile the viewport is shorter so 100vh scroll = ~640px not ~900px.
  // Use tighter ranges so content doesn't vanish before the user reaches CoupleSection.
  const fadeEnd    = isMobile() ? 400  : 500
  const parallaxEnd = isMobile() ? 500 : 500

  const skyScale     = useTransform(scrollY, [0, parallaxEnd], [1, 1.08])
  const templeScale  = useTransform(scrollY, [0, parallaxEnd], [1, 1.18])
  const blur         = useTransform(scrollY, [0, parallaxEnd], ['blur(0px)', 'blur(8px)'])
  // IMPORTANT: never let opacity go fully to 0 on mobile — keep min 0 but
  // only start fading after the user has scrolled past hero fully.
  const opacity      = useTransform(scrollY, [0, fadeEnd], [1, 0])

  return (
    <motion.section className='hero' style={{ opacity }}>

      {/* SKY */}
      <motion.div className='sky-bg' style={{ scale: skyScale }}>
        <img src={sky} alt='' />
      </motion.div>

      <div className='hero-overlay'></div>
      <div className='hero-overlay-bottom'></div>
      <div className='hero-overlay-vignette'></div>

      {/* TEMPLE */}
      <motion.div
        className='temple-wrapper'
        style={{ scale: templeScale, filter: blur }}
      >
        <img src={temple} alt='' className='temple-img' />
      </motion.div>

      {/* ARCH */}
      <motion.div
        className='arch-wrap'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        <ArchDecor />
      </motion.div>

      {/* TOP CONTENT */}
      <div className='top-content'>

        <motion.div
          className='om-wrap'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease: 'easeOut' }}
        >
          <OmSymbol />
        </motion.div>

        <motion.p
          className='save-text'
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
        >
          Save the Date
        </motion.p>

        <motion.div
          className='kolam-wrap'
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.9, duration: 1.2, ease: 'easeOut' }}
        >
          <KolamDivider />
        </motion.div>

        <div className='couple-name-wrap'>
          <motion.span
            className='name-left'
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Kumar
          </motion.span>

          <motion.span
            className='middle-symbol'
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
          >
            &
          </motion.span>

          <motion.span
            className='name-right'
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Sowmiya
          </motion.span>
        </div>

        <motion.div
          className='kolam-wrap'
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1.2, ease: 'easeOut' }}
        >
          <KolamDivider />
        </motion.div>

      </div>

      {/* LOTUSES */}
      <motion.div
        className='lotus-left-wrap'
        initial={{ opacity: 0, x: -60, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.6, duration: 1.2, ease: 'easeOut' }}
      >
        <LotusLeft />
      </motion.div>

      <motion.div
        className='lotus-right-wrap'
        initial={{ opacity: 0, x: 60, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.6, duration: 1.2, ease: 'easeOut' }}
      >
        <LotusRight />
      </motion.div>

      {/* DATE BOX */}
      <motion.div
        className='date-box'
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.8, duration: 1, ease: 'easeOut' }}
      >
        <div className='date-box-inner'>
          <p className='date-box-label'>YOU ARE CORDIALLY INVITED</p>
          <div className='date-box-rule'></div>
          <h2 className='date-box-date'>28 MAY 2026</h2>
          <span className='date-box-time'>Thursday  ·  10:30 AM</span>
        </div>
      </motion.div>

      <div className='particles'></div>
      <div className='particles particles--slow'></div>

    </motion.section>
  )
}

export default Hero