import React from 'react';
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
          <Introduction />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <Projects />

        <section id="education">
          <Education />
        </section>

        <section id="contacts">
          <Contacts />
        </section>

      </div>
    </React.Fragment>
  )
}

export default App
