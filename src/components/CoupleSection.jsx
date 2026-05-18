import './../styles/couple.css'

import couple from '../assets/couple-2.png'
import sky from '../assets/sky.jpg'
import temple from '../assets/temple2.png'

import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion'

/* ─── SVG Decorations ─── */

const MandalaFrame = () => (
  <svg viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="mandala-frame">
    <circle cx="220" cy="220" r="210" stroke="#c8973a" strokeWidth="1" opacity="0.35" strokeDasharray="4 6"/>
    <circle cx="220" cy="220" r="200" stroke="#c8973a" strokeWidth="0.6" opacity="0.2"/>
    <path d="M220 20 Q250 60 220 90 Q190 60 220 20Z" fill="#c8973a" opacity="0.45"/>
    <path d="M220 420 Q250 380 220 350 Q190 380 220 420Z" fill="#c8973a" opacity="0.45"/>
    <path d="M20 220 Q60 250 90 220 Q60 190 20 220Z" fill="#c8973a" opacity="0.45"/>
    <path d="M420 220 Q380 250 350 220 Q380 190 420 220Z" fill="#c8973a" opacity="0.45"/>
    {[45,135,225,315].map((deg, i) => (
      <g key={i} transform={`rotate(${deg} 220 220)`}>
        <path d="M220 25 Q233 55 220 75 Q207 55 220 25Z" fill="#c8973a" opacity="0.3"/>
      </g>
    ))}
    <circle cx="220" cy="220" r="185" stroke="#c8973a" strokeWidth="1.4" opacity="0.5"/>
    <circle cx="220" cy="220" r="178" stroke="#e8b86d" strokeWidth="0.5" opacity="0.25"/>
    {Array.from({ length: 12 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 220 220)`}>
        <ellipse cx="220" cy="55" rx="7" ry="18" fill="#c8973a" opacity="0.38"/>
      </g>
    ))}
    <circle cx="220" cy="220" r="130" stroke="#c8973a" strokeWidth="1" opacity="0.4"/>
    <circle cx="220" cy="220" r="124" stroke="#c8973a" strokeWidth="0.5" opacity="0.2" strokeDasharray="3 5"/>
    {Array.from({ length: 8 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 45} 220 220)`}>
        <polygon points="220,92 224,115 220,130 216,115" fill="#c8973a" opacity="0.5"/>
      </g>
    ))}
    <circle cx="220" cy="220" r="8" fill="#e8b86d" opacity="0.7"/>
    <circle cx="220" cy="220" r="14" stroke="#c8973a" strokeWidth="1" fill="none" opacity="0.5"/>
  </svg>
)

const KolamDivider = () => (
  <svg viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="couple-kolam">
    <polygon points="200,3 207,15 200,27 193,15" fill="#c8973a" opacity="0.9"/>
    <line x1="214" y1="15" x2="395" y2="15" stroke="#c8973a" strokeWidth="0.7" opacity="0.4"/>
    <line x1="186" y1="15" x2="5" y2="15" stroke="#c8973a" strokeWidth="0.7" opacity="0.4"/>
    {[235,262,289,316,343,370].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="15" r="2" fill="#c8973a" opacity="0.65"/>
        <circle cx={x} cy="15" r="4.5" stroke="#c8973a" strokeWidth="0.5" fill="none" opacity="0.35"/>
      </g>
    ))}
    {[165,138,111,84,57,30].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="15" r="2" fill="#c8973a" opacity="0.65"/>
        <circle cx={x} cy="15" r="4.5" stroke="#c8973a" strokeWidth="0.5" fill="none" opacity="0.35"/>
      </g>
    ))}
  </svg>
)

const LampDecor = () => (
  <svg viewBox="0 0 60 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="lamp-svg">
    <ellipse cx="30" cy="14" rx="5" ry="8" fill="#ffcc44" opacity="0.9"/>
    <ellipse cx="30" cy="18" rx="3" ry="5" fill="#fff5aa" opacity="0.7"/>
    <line x1="30" y1="22" x2="30" y2="30" stroke="#c8973a" strokeWidth="1.2"/>
    <path d="M18 30 Q30 26 42 30 L44 42 Q30 48 16 42Z" fill="#c8973a" opacity="0.8"/>
    <ellipse cx="30" cy="30" rx="12" ry="4" fill="#e8b86d" opacity="0.9"/>
    <rect x="28" y="42" width="4" height="30" fill="#c8973a" opacity="0.7"/>
    <ellipse cx="30" cy="72" rx="10" ry="4" fill="#c8973a" opacity="0.6"/>
    <rect x="29" y="76" width="2" height="18" fill="#c8973a" opacity="0.5"/>
    <ellipse cx="30" cy="94" rx="16" ry="5" fill="#c8973a" opacity="0.7"/>
    <rect x="20" y="94" width="20" height="5" fill="#b8842a" opacity="0.6"/>
    <ellipse cx="30" cy="99" rx="16" ry="4" fill="#c8973a" opacity="0.5"/>
    <ellipse cx="30" cy="16" rx="14" ry="16" fill="#ffcc44" opacity="0.06"/>
  </svg>
)

const FloralCorner = ({ flip }) => (
  <svg
    viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="floral-corner"
    style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
  >
    <path d="M5 95 Q5 50 50 5" stroke="#c8973a" strokeWidth="1.2" fill="none" opacity="0.5"/>
    <path d="M5 95 Q10 60 40 35" stroke="#c8973a" strokeWidth="0.7" fill="none" opacity="0.3"/>
    <circle cx="20" cy="75" r="5" fill="#c8973a" opacity="0.5"/>
    <circle cx="20" cy="75" r="2.5" fill="#fbecc8" opacity="0.8"/>
    <circle cx="38" cy="52" r="5" fill="#c8973a" opacity="0.45"/>
    <circle cx="38" cy="52" r="2.5" fill="#fbecc8" opacity="0.7"/>
    <circle cx="58" cy="30" r="5" fill="#c8973a" opacity="0.4"/>
    <circle cx="58" cy="30" r="2.5" fill="#fbecc8" opacity="0.7"/>
    <path d="M12 85 Q18 78 14 70" stroke="#c8973a" strokeWidth="0.7" fill="none" opacity="0.35"/>
    <path d="M25 65 Q32 58 28 50" stroke="#c8973a" strokeWidth="0.7" fill="none" opacity="0.35"/>
  </svg>
)

/* ─── Detect mobile ─── */
const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 768

/* ─── Component ─── */

const CoupleSection = () => {

  const { scrollY } = useScroll()

  const mobile = isMobile()

  // ── Scroll ranges ──
  // Mobile: viewport is ~640px tall, so hero occupies [0–640px] of scroll.
  // CoupleSection starts becoming visible around scrollY 500–600 on mobile,
  // vs 700–800 on desktop. Adjust all ranges accordingly.

  const sectionFadeIn  = mobile ? [300, 580]  : [350, 650]
  const coupleEnter    = mobile ? [300, 700]  : [350, 900]
  const coupleVisible  = mobile ? [300, 580]  : [350, 720]
  const textEnter      = mobile ? [300, 700]  : [350, 900]
  const mandalaRange   = mobile ? [300, 1200] : [350, 1400]

  const sectionOpacity = useTransform(scrollY, sectionFadeIn, [0, 1])
  const coupleX        = useTransform(scrollY, coupleEnter, [-220, 0])
  const coupleOpacity  = useTransform(scrollY, coupleVisible, [0, 1])
  const textX          = useTransform(scrollY, textEnter, [220, 0])
  const textOpacity    = useTransform(scrollY, coupleVisible, [0, 1])
  const mandalaRot     = useTransform(scrollY, mandalaRange, [0, 30])

  // Temple: on mobile DON'T slide it off-screen — keep x:0
  const templeX     = useTransform(scrollY, coupleEnter, [0, mobile ? 0 : 380])
  const templeScale = useTransform(scrollY, coupleEnter, [1, mobile ? 1 : 1.12])

  return (
    <motion.section className='couple-section' style={{ opacity: sectionOpacity }}>

      {/* SKY BG */}
      <div className='couple-bg'>
        <img src={sky} alt='' />
      </div>

      {/* OVERLAYS */}
      <div className='couple-overlay'></div>
      <div className='couple-overlay-left'></div>
      <div className='couple-overlay-right'></div>

      {/* TEMPLE */}
      <motion.div
        className='couple-temple'
        style={{ x: templeX, scale: templeScale }}
      >
        <img src={temple} alt='' />
      </motion.div>

      {/* CONTENT */}
      <div className='couple-content'>

        {/* ── LEFT: PHOTO ── */}
        <motion.div
          className='couple-image-wrap'
          style={{ x: coupleX, opacity: coupleOpacity }}
        >
          <div className='lamp-left'><LampDecor /></div>
          <div className='lamp-right'><LampDecor /></div>

          <motion.div className='mandala-wrap' style={{ rotate: mandalaRot }}>
            <MandalaFrame />
          </motion.div>

          <div className='couple-photo'>
            <img src={couple} alt='Kumar & Sowmiya' />
          </div>

          <div className='fc fc--tl'><FloralCorner /></div>
          <div className='fc fc--tr'><FloralCorner flip /></div>
        </motion.div>

        {/* ── RIGHT: TEXT ── */}
        <motion.div
          className='couple-text'
          style={{ x: textX, opacity: textOpacity }}
        >
          <p className='couple-label'>WITH THE BLESSINGS OF</p>
          <p className='couple-families'>Our Families</p>

          <KolamDivider />

          <div className='couple-names'>
            <span className='cn-name'>Kumar</span>
            <span className='cn-amp'>&</span>
            <span className='cn-name'>Sowmiya</span>
          </div>

          <KolamDivider />

          <p className='couple-quote'>
            "Two souls woven by destiny,<br/>
            united in love, blessed by tradition."
          </p>

          <div className='couple-details'>
            <div className='detail-row'>
              <span className='detail-icon'>✦</span>
              <span className='detail-text'>28 May 2026</span>
            </div>
            <div className='detail-row'>
              <span className='detail-icon'>✦</span>
              <span className='detail-text'>Thursday · 10:30 AM</span>
            </div>
            <div className='detail-row'>
              <span className='detail-icon'>✦</span>
              <span className='detail-text'>Tamil Nadu, India</span>
            </div>
          </div>

          <div className='couple-badge'>
            <span>Wedding Celebration</span>
          </div>
        </motion.div>

      </div>

      <div className='couple-particles'></div>

    </motion.section>
  )
}

export default CoupleSection