import React from 'react'
import About from './About'
import Service from './Service'
import Project from './Project'
import Contact from './Contact'
import ExperienceList from '../Experiencie/ExperienceList'

const Main = () => {
  return (
    <main>
      <About />

      <Service />

      <ExperienceList />

      <Project />

      <Contact />
    </main>    
  )
}

export default Main