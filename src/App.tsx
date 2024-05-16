import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarBackgound from './components/StarBackground.jsx'
import ShowingText from './components/ShowingText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <StarBackgound />
       <ShowingText text="Hola, este es un texto que aparece poco a poco!" speed={100} color="white"/>
    </>
  )
}

export default App
