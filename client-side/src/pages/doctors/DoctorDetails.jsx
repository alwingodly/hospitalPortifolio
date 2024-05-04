import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import Sidepanel from "./Sidepanel";
const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2 ">
            <div className="flex item-center jus gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="" className="w-full" />
              </figure>
              <div>
                <span className="text-primary bg-softWhite py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Surgeon
                </span>
                <h3 className="text-textColor text-[22px] leading-9 mt-3 font-bold">
                  Alwin Godly
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] tetx-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
                    (272)
                  </span>
                </div>
                <p className="text_para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Doctors are highly trained medical professionals who diagnose
                  and treat illnesses, injuries, and various health conditions.
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b botder-solid border-light">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primary"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-textColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" && "border-b border-solid border-primary"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-textColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
          </div>
          <div>
            <Sidepanel/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
