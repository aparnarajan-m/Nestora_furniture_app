import React from 'react'
import OffersData from '../Data/OffersData.json'
import './offerscart.css'

function OffersCart() {
    return (
        <div className="offer-section">
            <h1 className='offer-head'>Special Offers 🔥</h1>
            <p className='offer-descriptiom'>Grab your favorite products at amazing discounts!</p>

            <div className="offer-grid">
                {OffersData.map((item) => (
                    <div className="offer-card" key={item.id}>
                        <img className="offer-img" src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <div className='price-section'>
                        <h5 className="old-price">₹{item.originalPrice}</h5>
                        <h4 className="new-price">₹{item.offerPrice}</h4>
                        </div>
                        <span className="discount">{item.discount} OFF</span>
                        <button className="offer-btn">Shop Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OffersCart