import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Doctors from '../pages/doctors/Doctors'
import DoctorDetails from '../pages/doctors/DoctorDetails'
import Contact from '../pages/Contact'
import {Routes , Route} from 'react-router-dom'
import Blog from '../pages/blog/Blog'
import BlogDetail from '../pages/blog/BlogDetail'
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/doctors' element = {<Doctors/>}/>
      <Route path='/doctors/:id' element = {<DoctorDetails/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register' element = {<Signup/>}/>
      <Route path='/contacs' element = {<Contact/>}/>
      <Route path='/services' element = {<Services/>}/>
      <Route path='/blog' element = {<Blog/>}/>
      <Route path='/blog/:id' element = {<BlogDetail/>}/>

    </Routes>
  )
}

export default Routers
