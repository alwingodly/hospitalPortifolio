import React from "react";

const LeadersCard = ({ leader }) => {
  const { name, position, photo } = leader;
  return (
    <div className="p-3 lg:p-5 flex flex-col items-center">
      <div>
        <img src={photo} className="w-full" alt="" />
      </div>
      <h2 className="text-[16px] leading-[30px] lg:text-[20px] lg:leading-9 text-textColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>
      <div className="flex items-center justify-between">
        <span className="text-primary py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {position}
        </span>
      </div>
    </div>
  );
};

export default LeadersCard;
