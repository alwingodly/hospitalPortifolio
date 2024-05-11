import React from 'react';
import { departments } from '../../assets/data/services';
import ServiceCard from './ServiceCard';

const ServiceList = () => {
  const selectedDepartments = departments.slice(0, 3);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lh:mt-[55px]'>
      {
        selectedDepartments.map((item, index) => {
          return <ServiceCard name={item.name} Icon={item.Icon} index={index} key={index} />;
        })
      }
    </div>
  );
};

export default ServiceList;
