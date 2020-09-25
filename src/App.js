import React from 'react'
import './index.css'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <NavBar />
    <Header />
    <About />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
    </>
  )
}

export default App
