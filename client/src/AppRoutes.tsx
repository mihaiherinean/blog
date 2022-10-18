import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Blog from './pages/Blog/Blog'
import Blogs from './pages/Blogs/Blogs'
import Home from './pages/Home/Home'
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/categorie/:category' element={<Blogs/>}/>
        <Route path='/:id' element={<Blog/>}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes