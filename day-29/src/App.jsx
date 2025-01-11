import { useState } from 'react'
import './App.css'
import ScrollIndicators from './components/ScrollIndicators'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollIndicators />
    </>
  )
}

export default App
