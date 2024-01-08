import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const messages = [
  'Nem elég hosszú a név',
  'A két jelsző nem egyezik',
  'A születési dátum nem lehet a jövöben'
]
function App() {


  return (
    <ul>
      {
        messages.map(msg =><li>{msg}</li>)
      }
    </ul>
  )
}

export default App
