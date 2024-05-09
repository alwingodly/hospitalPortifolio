import React, { useState, useEffect } from 'react';
import { doctors } from '../../assets/data/doctors';
import DoctorCard from './DoctorCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DoctorsList = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    // Call handleResize on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className='gap:5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      <Slider {...settings}>
        {doctors.map((doctor , index) => {
          return <DoctorCard key={doctor.id} doctor={doctor}/>
        })}
      </Slider>
    </div>
  );
};

export default DoctorsList;
