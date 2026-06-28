import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'

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
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='0, 65, 125'
      outerAlpha={0.2}
      innerScale={1.5}
      outerStyle={{
        border: "3px solid #fff"
      }}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
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