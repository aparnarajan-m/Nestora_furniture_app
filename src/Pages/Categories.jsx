import React from 'react'
import CategorySlider from '../Components/CategorySlider'
import ChairCategorySection from '../Components/ChairCategorySection'
import './categories.css'


function Categories() {
  return (
    <div className='categories'>
      <CategorySlider />
      <ChairCategorySection/>
    </div>
  )
}

export default Categories