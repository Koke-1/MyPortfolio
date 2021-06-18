import React from 'react'
import HomePage from './HomePage'
import About from './components/About'
import Projects from './components/Projects'
import Technology from './components/Technology'
import './css/style.css'

export default function Main() {
  return (
    <>
      <HomePage/>
      <About/>
      <Projects/>
      <Technology/>
    </>
  )
}
