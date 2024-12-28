import { useState } from 'preact/hooks'
import './app.css'
import Star from './Components/Star'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Star Rating</h1>
      <Star />
    </>
  )
}
