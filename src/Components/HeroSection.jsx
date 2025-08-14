import React from 'react'
import './herosection.css'

function HeroSection() {
  return (
    <div className='herosection'>
        <div className='hero-sub-section'>
        <h1 className='hero-title'>Furnish <br /> Your World</h1>
        <div className='hero-btn-group'>
            <button className='hero-btn hero-shop-btn'>Shop Now !</button>
            <button className='hero-btn hero-explore-btn'>Explore Categories </button>
        </div>
        </div>
    </div>
  )
}

export default HeroSection