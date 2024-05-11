import React from 'react';
import { departments } from '../../assets/data/services';
import HomeServiceCard from './HomeServiceCard';

const ServiceList = () => {
  const selectedDepartments = departments.slice(0, 4);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {
        selectedDepartments.map((item, index) => {
          return <HomeServiceCard name={item.name} Icon={item.Icon} desc={item.desc} index={index} key={index} />;
        })
      }
    </div>
  );
};

export default ServiceList;
