import React from "react";
import { formatDate } from "../../../utils/formatDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold flex items-center gap-2">
          About of
          <span className="text-primary font-bold text-[24px] leading-9">
            Alwin Godly
          </span>
        </h3>
        <p className="text_para">
          Doctors are highly trained medical professionals who diagnose and
          treat illnesses, injuries, and health conditions. They undergo
          extensive education and training, often specializing in specific areas
          of medicine. Doctors provide patient care in various settings,
          collaborating with other healthcare professionals to ensure
          comprehensive treatment.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-primary text-[15px] leading-6 font-semibold">
                {formatDate("07-04-2014")} -{formatDate("09-13-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              New Appolo hospital , kerala.
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-primary text-[15px] leading-6 font-semibold">
                {formatDate("07-04-2010")}-{formatDate("07-04-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              New Appolo hospital , kerala.
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-softWhite">
            <span className="text-primary text-[15px] leading-6 font-semibold">
              {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr.Surgeon
            </p>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              New Appolo hospital , kerala.
            </p>
          </li>
          <li className="p-4 rounded bg-softWhite">
            <span className="text-primary text-[15px] leading-6 font-semibold">
              {formatDate("07-04-2010")} - {formatDate("08-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr.Surgeon
            </p>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              New Appolo hospital , kerala.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
