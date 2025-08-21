import React from 'react'
import CategorySlider from '../Components/CategorySlider'
import './categories.css'

function Categories() {
  return (
    <div className='categories'>
      <h2 className="category-title">Furniture Categories</h2>
      <div></div>
      <CategorySlider/>
    </div>
  )
}

export default Categories