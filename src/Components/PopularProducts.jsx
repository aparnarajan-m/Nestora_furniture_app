import React from 'react'
import PopularData from '../Data/PopularCatProductsData.json'
import './popularproducts.css'

function PopularProducts() {
  return (
    <div className='popular-product-section'>
        <section className='popularhead'>
            <h1>Our Popular Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>
        
        <section className='populardata'>
            {PopularData.map((popData) => (
                <div className='populardata-cart' key={popData.id}>
                    <img className='popularcart-img' src={popData.image} alt="popular furniture image" />
                    <h3>{popData.name}</h3>
                    <h4>{popData.price}</h4>
                    <button className='populatcart-button'>add to cart</button>
                </div>
            ))}
        </section>
    </div>
  )
}

export default PopularProducts