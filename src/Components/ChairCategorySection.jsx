import React from 'react'
import chairImg1 from '../assets/chair-cat-img1.jpg'
import chairImg2 from '../assets/chair-cat-Img2.jpg'
import chairImg3 from '../assets/chair-cat-Img3.jpg'
import './chaircategorysection.css'

function ChairCategorySection() {
    return (
        <div className='chair-category-section'>
            <section className='chair-category-images'>
                <img className='chair-main-image' src={chairImg1} alt="chair image" />
                <div className='chair-category-box'>
                    <img className='chair-cat-img' src={chairImg2} alt="chair image" />
                    <img className='chair-cat-img' src={chairImg3} alt="chair image" />
                    <img className='chair-cat-img' src={chairImg2} alt="chair image" />
                </div>
            </section>

            <section className='chair-category-info'>
                <h2 className="chair-title">Chair Categories</h2>
                <p className='chair-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Inventore voluptatem ea blanditiis asperiores corrupti veniam dignissimos <br />
                    reiciendis deleniti beatae quae excepturi amet saepe dolorum alias, cupiditate ad deserunt incidunt veritatis. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore voluptatem ea blanditiis asperiores corrupti veniam dignissimos <br />
                    reiciendis deleniti beatae quae excepturi amet saepe dolorum alias, cupiditate ad deserunt incidunt veritatis.
                </p>
            </section>
        </div>
    )
}

export default ChairCategorySection