import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Categories from '../Pages/Categories'
import Offers from '../Pages/Offers'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/categories" element = {<Categories/>}/>
        <Route path='/offers' element = {<Offers/>}/>
        <Route path="/blog" element = {<Blog/>} />
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes