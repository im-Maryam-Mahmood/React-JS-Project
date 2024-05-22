import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1>We Ensure Better Education for a better world</h1>
        <p>Our cutting-edge cirriculum is designed to empower students with the knowledge skills and experiences needed to excel in the field of dynamic education</p>
        <button className='btn'>Explore more &nbsp;&nbsp;<img src={dark_arrow} alt="DarkArrow" /></button>
      </div>
    </div>
  )
}

export default Hero
