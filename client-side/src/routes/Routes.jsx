import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Doctors from '../pages/doctors/Doctors'
import DoctorDetails from '../pages/doctors/DoctorDetails'
import {Routes , Route} from 'react-router-dom'
import Blog from '../pages/blog/Blog'
import BlogDetail from '../pages/blog/BlogDetail'
import AdminLogin from '../pages/admin/AdminLogin'
import AboutPage from '../pages/AboutPage'
import Contact from '../pages/contact/Contact'
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/doctors' element = {<Doctors/>}/>
      <Route path='/doctors/:id' element = {<DoctorDetails/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register' element = {<Signup/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/services' element = {<Services/>}/>
      <Route path='/blog' element = {<Blog/>}/>
      <Route path='/blog/:id' element = {<BlogDetail/>}/>
      <Route path ='/admin' element = {<AdminLogin/>}/>
      <Route path ='/about' element = {<AboutPage/>}/>
    </Routes>
  )
}

export default Routers
