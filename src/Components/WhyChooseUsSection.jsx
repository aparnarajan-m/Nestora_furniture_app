import React from 'react'
import whychooseimg1 from '../assets/whychooseimg1.jpg'
import whychooseimg2 from '../assets/whychooseimg2.jpg'
import './whychooseussection.css'

function WhyChooseUsSection() {
    return (
        <div className='why-choose-section'>
            <div className='why-choose-text'>
                <div className='why-choose-subdiv'>
                    <div>
                        <p className='why-subtitle'>Plan Your Home With Us</p>
                <h1 className='why-title'>Why Choose Us?</h1>
                    </div>

                <p className='why-description'>
                    Furnishing your space should be exciting, not overwhelming. Our expert team guides you at every <br /> step — 
                    from selecting the perfect design to tailoring it for your unique lifestyle. With our support, you’ll enjoy a smooth,
                     stress-free journey that turns your dream home into reality.
                     Furnishing your space should be exciting, not overwhelming. <br /> That’s why we combine style, quality,
                    and personalized service to bring your vision to life. From helping you choose the right furniture to 
                    ensuring flawless delivery and setup, we make the entire process easy and enjoyable.
                </p>
                <ul className="features-list">
                    <li className='feature-item'>
                        <span className='feature-icon'>✔</span> Free Design Consultation
                    </li>
                    <li className='feature-item'>
                        <span>✔</span> Custom-Made Furniture
                    </li>
                    <li className='feature-item'>
                        <span>✔</span> Fast & Reliable Delivery
                    </li>
                </ul>
                <button className="why-explore-btn">Explore Them →</button>
                </div>
            </div>

            <div className='why-choose-images'>
                <img className='small-img' src={whychooseimg2} alt="Furniture decor" />
                <img className="large-img" src={whychooseimg1} alt="Living room design" />
            </div>
        </div>
    )
}

export default WhyChooseUsSection