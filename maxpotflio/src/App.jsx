import React from 'react'
import Header from './component/header/header'
import Nav from './component/navbar/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Testimonials from './component/testimonials/Testimonials'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Portfolio from './component/portfolio/Portfolio'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App