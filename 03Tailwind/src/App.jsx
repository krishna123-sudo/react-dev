import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card username="Krishna Sekhar" post="Software Developer" />
     <Card username='Divyam Kumar jha' post='junior developer'/>
     <Card username='Ratnesh Kumar'/>
    </>
  )
}

export default App
