import React from 'react'
import './index.css'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
// import SmoothScroll from './components/SmoothScroll'
import About from './components/About'
import Projects from './components/Projects'
import ProjectsContainer from './components/ProjectsContainer'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <NavBar />
    <Header />
    {/* <SmoothScroll /> */}
    <About />
    <Projects />
    <ProjectsContainer />
    <Resume />
    <Contact />
    <Footer />
    </>
  )
}

export default App
