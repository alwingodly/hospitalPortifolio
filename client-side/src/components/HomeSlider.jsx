import React, { useRef, useEffect } from 'react';
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import '../slider.css'
const HomeSlider = () => {
    const nextDom = useRef(null);
    const prevDom = useRef(null);
    const carouselDom = useRef(null);
    const SliderDom = useRef(null);
    const thumbnailBorderDom = useRef(null);
    const timeDom = useRef(null);
//     let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');

// let carouselDom = document.querySelector('.carousel');
// let SliderDom = carouselDom.querySelector('.carousel .list');
// let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
// let timeDom = document.querySelector('.carousel .time');

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// let timeRunning = 3000;
// let timeAutoNext = 7000;

// nextDom.onclick = function(){
//     showSlider('next');    
// }

// prevDom.onclick = function(){
//     showSlider('prev');    
// }
// let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)
// function showSlider(type){
//     let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//     let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
//     if(type === 'next'){
//         SliderDom.appendChild(SliderItemsDom[0]);
//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         carouselDom.classList.add('next');
//     }else{
//         SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//         thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//         carouselDom.classList.add('prev');
//     }
//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//     }, timeRunning);

//     clearTimeout(runNextAuto);
//     runNextAuto = setTimeout(() => {
//         next.click();
//     }, timeAutoNext)
// }
useEffect(() => {
    const SliderItemsDom = SliderDom.current.querySelectorAll('.item');
    const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');

    nextDom.current.onclick = () => {
        showSlider('next', SliderItemsDom, thumbnailItemsDom);
    };

    prevDom.current.onclick = () => {
        showSlider('prev', SliderItemsDom, thumbnailItemsDom);
    };

    var runNextAuto = setTimeout(() => {
        nextDom.current.click();
    }, 7000);

    function showSlider(type, SliderItems, thumbnailItems) {
        if (type === 'next') {
            SliderDom.current.appendChild(SliderItems[0]);
            thumbnailBorderDom.current.appendChild(thumbnailItems[0]);
            carouselDom.current.classList.add('next');
        } else {
            SliderDom.current.prepend(SliderItems[SliderItems.length - 1]);
            thumbnailBorderDom.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
            carouselDom.current.classList.add('prev');
        }

        setTimeout(() => {
            carouselDom.current.classList.remove('next');
            carouselDom.current.classList.remove('prev');
        }, 3000);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.current.click();
        }, 7000);
    }
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
        <button id="prev" ref={prevDom}>{"<"}</button>
        <button id="next" ref={nextDom}>{">"}</button>
      </div>
      {/* time running */}
      <div className="time"></div>
    </div>
  );
};

export default HomeSlider;
