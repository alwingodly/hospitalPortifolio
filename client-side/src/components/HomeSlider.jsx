import React, { useRef, useEffect } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/Variants";
import "../slider.css";
const HomeSlider = () => {
  const nextDom = useRef(null);
  const prevDom = useRef(null);
  const carouselDom = useRef(null);
  const SliderDom = useRef(null);
  const thumbnailBorderDom = useRef(null);
  useEffect(() => {
    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.current.querySelectorAll(".item");
      const thumbnailItemsDom =
        thumbnailBorderDom.current.querySelectorAll(".item");

      if (type === "next") {
        const nextSlide =
          SliderItemsDom[0].previousElementSibling || SliderItemsDom[0];
        SliderDom.current.appendChild(nextSlide);
        thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
      } else {
        const prevSlide =
          SliderItemsDom[SliderItemsDom.length - 1].previousElementSibling ||
          SliderItemsDom[SliderItemsDom.length - 1];
        SliderDom.current.prepend(prevSlide);
        thumbnailBorderDom.current.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
      }

      // clearTimeout(runNextAuto);
      // runNextAuto = setTimeout(() => {
      // nextDom.current.click();
      // }, 7000);
    };

    nextDom.current.onclick = () => {
      showSlider("next");
    };

    prevDom.current.onclick = () => {
      showSlider("prev");
    };

    // let runNextAuto = setTimeout(() => {
    //   nextDom.current.click();
    // }, 7000);

    // return () => {
    //   clearTimeout(runNextAuto);
    // };
  }, []);
  return (
    <div className="carousel" ref={carouselDom}>
      {/* list item */}
      <div className="list" ref={SliderDom}>
        <div className="item">
          <img src={img1} alt="Slider 1" />
          <div className="content">
            <div className="title">We help patients live a healthy</div>
            <div className="des">
              In our commitment to revolutionizing healthcare, our hospital
              management platform integrates cutting-edge technology,
              compassionate care, and strategic innovation to deliver
              unparalleled patient experiences, empower healthcare
              professionals, and drive positive outcomes for all stakeholders
              within the complex healthcare ecosystem.
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img2} alt="Slider 2" />
          <div className="content">
            <div className="title">We help patients live a healthy</div>
            <div className="des">
              In our commitment to revolutionizing healthcare, our hospital
              management platform integrates cutting-edge technology,
              compassionate care, and strategic innovation to deliver
              unparalleled patient experiences, empower healthcare
              professionals, and drive positive outcomes for all stakeholders
              within the complex healthcare ecosystem.
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img3} alt="Slider 3" />
          <div className="content">
            <div className="title">We help patients live a healthy</div>
            <div className="des">
              In our commitment to revolutionizing healthcare, our hospital
              management platform integrates cutting-edge technology,
              compassionate care, and strategic innovation to deliver
              unparalleled patient experiences, empower healthcare
              professionals, and drive positive outcomes for all stakeholders
              within the complex healthcare ecosystem.
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img4} alt="Slider 4" />
          <div className="content">
            <div className="title">We help patients live a healthy</div>
            <div className="des">
              In our commitment to revolutionizing healthcare, our hospital
              management platform integrates cutting-edge technology,
              compassionate care, and strategic innovation to deliver
              unparalleled patient experiences, empower healthcare
              professionals, and drive positive outcomes for all stakeholders
              within the complex healthcare ecosystem.
            </div>
          </div>
        </div>
      </div>
      {/* list thumbnail */}
      <div className="thumbnail" ref={thumbnailBorderDom}>
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="item hidden md:block"
        >
          <img src={img1} alt="Thumbnail 1" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </motion.div>
        <motion.div 
         variants={fadeIn("up", 0.1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.1 }}
        className="item hidden md:block">
          <img src={img2} alt="Thumbnail 2" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="item hidden md:block">
          <img src={img3} alt="Thumbnail 3" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="item hidden md:block">
          <img src={img4} alt="Thumbnail 4" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </motion.div>
      </div>
      {/* next prev */}
      <div className="arrows">
        <button
          id="prev"
          className="text-5xl items-center flex justify-center"
          ref={prevDom}
        >
          {"<"}
        </button>
        <button
          className="text-5xl items-center flex justify-center"
          id="next"
          ref={nextDom}
        >
          {">"}
        </button>
      </div>
      {/* time running */}
      <div className="time"></div>
    </div>
  );
};

export default HomeSlider;
