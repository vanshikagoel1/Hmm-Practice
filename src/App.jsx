import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    Starting
    A basic example to get started with building Resuable Components.
    <Button text={"Reusable Button"}/>
    </>
  )
}

export default App
