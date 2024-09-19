import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Features from './Components/Features/Features'
import About from './Components/About/About'
import Courses from './Components/Courses/Courses'
import Testimonial from './Components/Testimonial/Testimonial'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Courses />
      <Testimonial />
    </div>
  )
}

export default App
