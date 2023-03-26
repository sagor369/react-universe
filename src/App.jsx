import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/states/Header'
import Button from './components/Button/Button'
import Card from './components/Card/Card'

function App() {

  return (
    <div>
      <Header />
      <Card></Card>
    </div>

  )
}

export default App
