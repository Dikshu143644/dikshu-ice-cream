import { useState } from 'react'
import './App.css'
import useLenis from './lib/useLenis'
import Preloader from './components/Preloader'
import IceCreamHero from './components/IceCreamHero'

function App() {
  useLenis()
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <IceCreamHero />
    </>
  )
}

export default App
