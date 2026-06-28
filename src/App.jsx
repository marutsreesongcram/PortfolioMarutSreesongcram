import './App.css'
import { Cursor } from 'cursor-effects'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/Hero/Hero'
import Skills from './assets/components/Skills/Skills'
import Services from './assets/components/Services/Services'
import Portfolio from './assets/components/Portfolio/Portfolio'
import Number from './assets/components/Number/Number'
import Testimonials from './assets/components/Testimonials/Testimonials'
import Contact from './assets/components/Contact/Contact'
import Footer from './assets/components/Footer/Footer'

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Number />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App