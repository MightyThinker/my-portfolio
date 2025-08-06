import React from 'react'
import './App.css'
import Introduction from './components/introduction/Introduction';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Contacts from './components/contacts/Contacts';

function App() {

  return (
    <React.Fragment>
      <div className='container'>

        <section id='introduction'>
          <Introduction></Introduction>
        </section>

        <section id="skills">
          <Skills></Skills>
        </section>

        <section id="experience">
          <Experience></Experience>
        </section>

        <section id="projects">
          <Projects></Projects>
        </section>

        <section id="education">
          <Education></Education>
        </section>

        <section id="contacts">
          <Contacts></Contacts>
        </section>

      </div>
    </React.Fragment>
  )
}

export default App
