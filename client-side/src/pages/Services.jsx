import React from "react";
import { departments } from "../assets/data/services";
import ServiceCard from "../components/services/ServiceCard";
import HomeSlider from "../components/HomeSlider";
const Services = () => {
  return (
    <section>
      {/* <HomeSlider/> */}
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Specialities</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap=[30px]">
          {departments.map((item, index) => {
            return (
              <ServiceCard
                name={item.name}
                desc={item.desc}
                Icon={item.Icon}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
