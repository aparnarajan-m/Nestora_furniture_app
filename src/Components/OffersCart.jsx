import React from 'react'
import OffersData from '../Data/OffersData.json'
import './offerscart.css'

function OffersCart() {
  return (
        <div className="offer-section">
      <h1>Special Offers 🔥</h1>
      <p>Grab your favorite products at amazing discounts!</p>

      <div className="offer-grid">
        {OffersData.map((item) => (
          <div className="offer-card" key={item.id}>
            <img className="offer-img" src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="old-price">₹{item.originalPrice}</p>
            <p className="new-price">₹{item.offerPrice}</p>
            <span className="discount">{item.discount} OFF</span>
            <button className="offer-btn">Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OffersCart