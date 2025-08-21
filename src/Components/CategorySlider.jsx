import React from 'react'
import Slider from 'react-slick'
import CategorieData from '../Data/CategorieData.json'
import './categoryslider.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CategorySlider() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
     <div className="category-slider">
      <Slider {...settings}>
        {CategorieData.map((cat) => (
          <div className="category-card" key={cat.id}>
            <img className="category-image" src={cat.image} alt={cat.name}  />
            <h3>{cat.name}</h3>
            <p>{cat.subtitle}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CategorySlider