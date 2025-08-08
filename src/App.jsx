import React from 'react';
import './App.css';
import Introduction from '@introduction/Introduction';
import Skills from '@skills/Skills';
import Experience from '@experience/Experience';
import Projects from '@projects/Projects';
import Education from '@education/Education';
import Contacts from '@contacts/Contacts';

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
