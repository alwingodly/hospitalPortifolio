import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, icon: IconComponent } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <div className="flex justify-center p-8">
      {IconComponent && <IconComponent size = {54} />}
      </div>
      <h2 className="text-[26px] leading-9 text-textColor font-[700] justify-center flex">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[30px]">
        <div>
        <Link
          to="/doctor"
          className="w-[44px] h-[44px] rounded-full border border-solid border-tertiary flex items-center justify-center group hover:bg-primary hover:border-none"
        >
          <BsArrowRight className="group-hover:text-primaryWhite w-6 h-5 text-primary" />
        </Link>
        </div>
        
        <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600] bg-tertiary text-primary">
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
