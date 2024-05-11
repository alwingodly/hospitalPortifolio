import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import { fadeIn } from "../../utils/Variants";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between pag-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <motion.div
          variants={fadeIn("left" , 0.1)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once: false , amount:0.1}}
          className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </motion.div>

          <motion.div
          variants={fadeIn("right" , 0.1)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once: false , amount:0.1}}
          className="w-full lg:w-1/2 xl:w-[670] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text_para">
              Our team of experienced healthcare professionals is committed to
              excellence in every aspect of hospital management.</p>
            <p className="text_para mt-[30px]">
              Driven by a passion for innovation and a dedication to continuous
              improvement, we continually invest in the latest advancements in
              medical research, technology, and practice. 
            </p>
            <Link to='/'>
                <button className="btn mb-[16px]">
                    Learn More
                </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
