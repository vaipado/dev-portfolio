import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <main>
        <div id="sobre" className='sobreMim'>
          <p className='textFundoSobreMim'> Carlos<br />Godinho</p>
          <Header />
          <About />
        </div>
        <div className='skillsProjects'>
          <Skills />
          <Projects />
        </div>
        <div className='contact'>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
