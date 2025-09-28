import React from 'react'
import CategorySlider from '../Components/CategorySlider'
import PopularProducts from '../Components/PopularProducts'
// import ChairCategorySection from '../Components/ChairCategorySection'
import './categories.css'


function Categories() {
  return (
    <div className='categories'>
      <CategorySlider />
      <PopularProducts/>
      {/* <ChairCategorySection/> */}
    </div>
  )
}

export default Categories