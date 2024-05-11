import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, rotate } from "../../utils/Variants";
import whitebody from "../../assets/images/null.png";
const HomeServiceCard = ({ name, desc, Icon, index }) => {
  return (
    <div className="relative pt-6  mt-8 rounded-tl-3xl rounded-tr-3xl hover:border-white border-2  border-primary flex flex-col justify-center items-center">
      <div className=" absolute flex justify-center p-8 w-30 rounded-full top-[-65px] bg-white z-0">
        <img src={whitebody} className="h-12" />
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" absolute flex justify-center p-8 w-30 rounded-full border-primary border-2 top-[-65px] bg-white z-1"
      >
        <img src={Icon} className="h-12" />
      </motion.div>

      <h2 className="text-[18px] leading-9 text-center text-textColor font-[700] justify-center flex mt-8">
        {name}
      </h2>
      {desc && (
        <p className="px-3 lg:px-5 text-[15px] text-center font-[400] h-[70px] text-textColor overflow-hidden">
          {desc}
        </p>
      )}
      <div className="flex justify-between mt-4 w-full">
        <div>
          <Link
            to="/doctor"
            className="w-[44px] h-[44px] flex items-center justify-center group hover:bg-primary hover:border-none"
          >
            <BsArrowRight className="group-hover:text-primaryWhite w-6 h-5 text-primary" />
          </Link>
        </div>

        <span className="w-[44px] pt-2 pl-2 rounded-br-md rounded-tl-full h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600] bg-primary text-white">
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default HomeServiceCard;
