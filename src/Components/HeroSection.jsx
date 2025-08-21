import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img7 from '../assets/img7.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import comfychair from '../assets/comfychair.jpg'

import './herosection.css'

function HeroSection() {
  return (
    <>
      <div className='herosection'>
        <div className='hero-content'>
          <h1 className='hero-title'>Furnish <br /> Your World</h1>
          <section className='hero-btn-group'>
            <button className='hero-btn hero-shop-btn'>Shop Now</button>
            <button className='hero-btn hero-explore-btn'>Explore Categories </button>
          </section>
        </div>
      </div>

      {/* Gallert Section */}
      <div className='gallery-section'>
        <section className='gallery-contents'>

          <div className='gallery-content'>
            <h1 className='gallery-heading'>Lorem Gallery</h1>
            <p className='gallery-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>

          <div className='gallery-grid'>
            <div className='gallery-item'><img src={img9} alt="" /></div>
            <section className='gallery-column'>
              <img src={comfychair} alt="" />
              <img src={img2} alt="" />
            </section>
            <div className='gallery-center-item'><img src={img1} alt="" /></div>
            <section className='gallery-column'>
              <img src={img10} alt="" />
              <img src={img3} alt="" />
            </section>
            <div className='gallery-item'><img src={img7} alt="" /></div>
          </div>

        </section>
      </div>
    </>

  )
}

export default HeroSection