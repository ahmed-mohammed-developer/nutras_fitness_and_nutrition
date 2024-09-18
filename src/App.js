import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Features from './Components/Features/Features'
import About from './Components/About/About'
import Courses from './Components/Courses/Courses'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Courses />
    </div>
  )
}

export default App
