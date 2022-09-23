import React from 'react'
import About from './componenets/about/About'
import Contact from './componenets/contact/Contact'
import Footer from './componenets/footer/Footer'
import Header from './componenets/header/Header'
import Nav from './componenets/nav/Nav'
import Project from './componenets/project/Project'
import Timeline from './componenets/timeline/Timeline'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Project/>
        <Timeline/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App