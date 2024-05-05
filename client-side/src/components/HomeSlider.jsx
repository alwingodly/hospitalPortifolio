import React, { useRef, useEffect } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
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
        const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll(".item");
      
        if (type === "next") {
          const nextSlide = SliderItemsDom[0].previousElementSibling || SliderItemsDom[0];
          SliderDom.current.appendChild(nextSlide);
          thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
        } else {
          const prevSlide = SliderItemsDom[SliderItemsDom.length - 1].previousElementSibling || SliderItemsDom[SliderItemsDom.length - 1];
          SliderDom.current.prepend(prevSlide);
          thumbnailBorderDom.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
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
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              {/* lorem 50 */}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img2} alt="Slider 2" />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img3} alt="Slider 3" />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img4} alt="Slider 4" />
          <div className="content">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
          </div>
        </div>
      </div>
      {/* list thumbnail */}
      <div className="thumbnail" ref={thumbnailBorderDom}>
        <div className="item">
          <img src={img1} alt="Thumbnail 1" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={img2} alt="Thumbnail 2" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={img3} alt="Thumbnail 3" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={img4} alt="Thumbnail 4" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
      </div>
      {/* next prev */}
      <div className="arrows">
        <button id="prev" ref={prevDom}>
          {"<"}
        </button>
        <button id="next" ref={nextDom}>
          {">"}
        </button>
      </div>
      {/* time running */}
      <div className="time"></div>
    </div>
  );
};

export default HomeSlider;
