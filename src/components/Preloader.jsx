import { useEffect, useState } from 'react'
import './Preloader.css'

const DURATION = 2600
const FADE = 300

const Preloader = ({ onDone }) => {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const fadeTimer = setTimeout(() => setLeaving(true), DURATION - FADE)
    const doneTimer = setTimeout(() => {
      document.body.style.overflow = ''
      onDone?.()
    }, DURATION)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
      document.body.style.overflow = ''
    }
  }, [onDone])

  return (
    <div className={`preloader${leaving ? ' preloader--leaving' : ''}`}>
      <div className="preloader-cone">
        <span className="preloader-scoop" />
        <span className="preloader-wafer" />
      </div>
      <p className="preloader-text">scooping</p>
    </div>
  )
}

export default Preloader
