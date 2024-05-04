import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/doctors/DoctorCard";
import Testimonial from "../../components/testimonial/Testimonial";

const Doctors = () => {
  return (
    <>
      <section>
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px]  mx-auto bg-softWhite rounded-md flex items-center justify-between">
            <input
              type="search"
              placeholder="Search Doctor"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
            />
            <button className="search-btn">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {doctors.map((doctor, index) => {
              return <DoctorCard key={doctor.id} doctor={doctor} />;
            })}
          </div>
        </div>
      </section>

      <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">What our patients say</h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health system offers
                unmatched, expert health care
              </p>
            </div>
            <Testimonial/>
          </div>
        </section>
    </>
  );
};

export default Doctors;
