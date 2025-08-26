import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img7 from '../assets/img7.jpg'
import img6 from '../assets/img6.jpg'
import './herosection.css'

function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <div className='herosection'>
        <div className='hero-content'>
          <h1 className='hero-title'>Furnish <br /> Your World</h1>
          <section className='hero-btn-group'>
            <button className='hero-btn hero-shop-btn'>Shop Now</button>
            <button className='hero-btn hero-explore-btn' onClick={() => navigate("/Categories")}>Explore Categories </button>
          </section>
        </div>
      </div>

      {/* Gallery Section */}
      <div className='gallery-section'>
        <section className='gallery-contents'>

          <div className='gallery-content'>
            <h1 className='gallery-heading'>Lorem Gallery</h1>
            <p className='gallery-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>

          <div className='gallery-grid'>
            <div className='gallery-item'><img src={img6} alt="image" /></div>
            <section className='gallery-column'>
              <img src={img4} alt="image" />
              <img src={img2} alt="image" />
            </section>
            <div className='gallery-center-item'><img src={img1} alt="image" /></div>
            <section className='gallery-column'>
              <img src={img5} alt="image" />
              <img src={img3} alt="image" />
            </section>
            <div className='gallery-item'><img src={img7} alt="image" /></div>
          </div>

        </section>
      </div>
    </>

  )
}

export default HeroSection