import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Campus from './Components/Campus/Campus';
import React, {useEffect, useState} from 'react';
import Contact from './Components/Contact/Contact';
import Programs from './Components/Programs/Program';
import Testimonials from './Components/Testimonials/Testimonials';
import VedioPlayer from './Components/VedioPlayer/VedioPlayer';
const App = () => {
   
  const [playState, setplayState]=useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAMS' Title='What We Offer'/>
        <Programs/>
         <About setplayState={setplayState}/>
         <Title subTitle='Gallery' Title='Campus Photos'/>
         <Campus/>
         <Title subTitle='TESTIMONIALS' Title='What Student Says'/>
         <Testimonials/>
         <Title subTitle='Contact Us' Title='Get in Touch'/>
         <Contact/>
         <Footer/>
         <VedioPlayer playState={playState}  setplayState={setplayState}/>
      </div>
    </div>
  )
}

export default App
