import React from 'react'
import Home from './components/Home'
import './App.css'
import About from './components/About'
import Cont from './components/Cont'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lenis from 'lenis'
const App = () => {
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    console.log(e)
  })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Cont />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App