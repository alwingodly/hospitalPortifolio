import React from 'react';
import { motion } from 'framer-motion';
import {departments} from '../assets/data/services.js'




const Menu = () => {
  return (
    <div className="bg-white hidden md:block rounded-lg overflow-hidden">
      <h2 className='text-xl font-semibold flex justify-center my-2'>Our Deparments</h2>
      <div className="menu-content grid grid-cols-4 p-4">
        {departments.map((dept, index) => (
          <DepartmentMenu key={index} title={dept.name} Icon = {dept.Icon}/>
        ))}
      </div>
    </div>
  );
};

const DepartmentMenu = ({ title, Icon }) => {
  return (
    <motion.div 
    >
      <div className='flex items-center gap-1 m-2'>
      <img src={Icon} className='w-6 mr-1'/>
      <p className="menu-text_para">{title}</p>
      </div>
    </motion.div>
  );
};

export default Menu;
