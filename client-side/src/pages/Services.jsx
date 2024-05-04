import React from 'react'
import {services} from "../assets/data/services"
import ServiceCard from '../components/services/ServiceCard'
const Services = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap=[30px] mt-[20px] lg:mt-[35px]'>
{
  services.map((item , index)=>{
    return <ServiceCard item={item} index={index} ket={index}/>
  })
}
      </div>
    </div>
  )
}

export default Services
