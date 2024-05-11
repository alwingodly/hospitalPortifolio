import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ name, desc, Icon, index }) => {
  return (
    <div className="py-6 px-3 lg:px-5 mt-8 hover:bg-softWhite rounded-lg hover:border-dim border border-white">
      <div className="flex justify-center p-8">
        <img src={Icon} className="h-16"/>
      </div>
      <h2 className="text-[20px] leading-9 text-center text-textColor font-[700] justify-center flex">
        {name}
      </h2>
      {desc && <p className="text-[16px] leading-7 text-center font-[400] h-[100px] text-textColor mt-4 overflow-hidden">
        {desc}
      </p>}
      <div className="flex items-center justify-between mt-2">
        <div>
          <Link
            to="/doctor"
            className="w-[44px] h-[44px] rounded-full flex items-center justify-center group hover:bg-primary hover:border-none"
          >
            <BsArrowRight className="group-hover:text-primaryWhite w-6 h-5 text-primary" />
          </Link>
        </div>

        <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600] bg-primary text-white">
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
