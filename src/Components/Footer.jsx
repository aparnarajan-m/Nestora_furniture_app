import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import footerImg1 from '../assets/footerImg1.jpg'
import footerImg2 from '../assets/footerImg2.jpg'
import footerImg3 from '../assets/footerImg3.jpg'
import footerImg4 from '../assets/footerImg4.jpg'
import footerImg5 from '../assets/footerImg5.jpg'
import footerImg6 from '../assets/footerImg6.jpg'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'><h1>Stay Updated</h1></div>

            <div className='footer-info'>
                <div className='info1'>
                    <h1 className='brand-name-abt'>Nestora</h1>
                    <h5>nestorafurnitures@gmail.com</h5>
                    <h5>+91 99********</h5>
                    <div className='social-icons-section' style={{ display: "flex", gap: "15px", fontSize: "24px" }}>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"> <FaFacebook /> </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"> <FaInstagram /> </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"> <FaTwitter /> </a>
                    </div>
                </div>
                <div className='info2'>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='info3'>
                        <img className='footerImgs' src={footerImg1} alt="" />
                        <img className='footerImgs' src={footerImg2} alt="" />
                        <img className='footerImgs' src={footerImg3} alt="" />
                        <img className='footerImgs' src={footerImg4} alt="" />
                        <img className='footerImgs' src={footerImg5} alt="" />
                        <img className='footerImgs' src={footerImg6} alt="" />
                </div>
                <div>
                </div>
            </div>
            <p className='footer-copy'>© 2025 Nestora Furnitures. All rights reserved.</p>
        </div>
    )
}

export default Footer