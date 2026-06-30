import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
// import Work from '../components/Work'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <section id ="home">

      <Hero />
      </section>
      <section id="about">

      <About />
      </section>
      <section id="skills">

      <Skills />
      </section>
      <section id="project">
      <Projects />
         </section>
      {/* <Work /> */}

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Home
