import { useState } from 'react'
import './App.css'
import ScrollIndicators from './components/ScrollIndicators'

function App() {


  return (
    <>
      <ScrollIndicators url={"https://dummyjson.com/products?limit=100"} />
    </>
  )
}

export default App
