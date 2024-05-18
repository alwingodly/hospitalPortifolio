import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {motion} from "framer-motion"
import { fadeIn } from "../../utils/Variants";
const FaqItem = ({ item , index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div 
    variants={fadeIn("right", 0,3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
    className="p-2 lg:p-3 rounded-[12px] border border-solid border-border mb-5 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="text-[16px] leading-7 lg:text=[22px] lg:leading-8 text-textColor">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-primary text-primaryWhite border-none"
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-textColor rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-secondary">
            {item.content}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default FaqItem;
