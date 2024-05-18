import React, { useEffect } from "react";
import img1 from "../assets/images/img4.jpg";
import LeadersCard from "../components/about/LeadersCard";
import { leaders } from "../assets/data/leaders";
import { about } from "../assets/data/about-mvv";
import AboutCard from "../components/about/AboutCard";
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <>
      <div className="blog-carousel">
          <div className="list">
            <div className="item">
              <img src={img1} alt="Slider 1" />
              <div className="about-content flex flex-col justify-end items-baseline">
                <div className="white-heading mb-4">
                  Sivagiri Sree Narayana Medical Mission Hospital
                </div>
                <div className="des">
                  In our commitment to revolutionizing healthcare, our hospital
                  management platform integrates cutting-edge technology,
                  compassionate care, and strategic innovation to deliver
                  unparalleled patient experiences, empower healthcare
                  professionals, and drive positive outcomes for all
                  stakeholders within the complex healthcare ecosystem.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="mt-8">
        <div className="container">
          <h4 className="heading">Background</h4>
          <div>
            <p className="text_para text-textColor">
              Sivagiri Sree Narayana Medical Mission Hospital(SSNMMH) is
              situated in the holy city of Varkala in Thiruvananthapuram
              district. In memory of well-known philosapher Saint Sree Narayana
              Guru who preached the gospel.”One Cast One Religion and One God
              For Man”. The Hospital owned and controlled Sree Narayanana
              Dharmga Sanghom Trust Sivagiri which is a public charitable trust
              founded by the Sree Narayana Guru. The trust is a body consisting
              of sanyasins, and registered under regulations 2 of 1088(ME). The
              objectives of Sree Narayanan Dharma Sanghom Trust are to do
              services to humanity and to perpetuate the monastic order of the
              members, to hold,administer and develop institution such as
              Mutts,Temples and other religious and charitable institution like
              Hospital,School etc. The Sree Narayana Dharma Sanghom Trust is
              approved by the Income Tax department. The nucleus of the SSNMMH
              was laid in the year 1952 by starting a small unit with minimum
              conveniences and with meager resources.Since then, the
              insitritution has grown up into a major hospital with 350 beds
              with almost all the specialities available in a modern hospital.
              The Hospital has attached with School of Nursing and College of
              Nursing running ANM,GNM,Bsc Nursing post basic nursing and Msc
              Nursing courses.
            </p>
            <p className="text_para text-textColor">
              The institution is run on philanthropic basis without any profit
              motive and it renders services to the general public without any
              distinction of religion,caste,creed,or color.The administration of
              the Hospital is vested in managing committiee consisting of 11
              members nominated by Dharma Sanghaom Trust.We do a lot of
              chariotable activities.
            </p>
            <ul>
              <li className="text_para text-textColor">
                🟠 Concessions in treatment are given to socially and
                economically backward patients.
              </li>
              <li className="text_para text-textColor">
                🟠 Conducting free medical camps on a regular basis.
              </li>
              <li className="text_para text-textColor">
                🟠 Conducting free cataract surgeries for poor patient in
                association with different NGOs.
              </li>
              <li className="text_para text-textColor">
                🟠Provid ing free of charge school health care facilities for
                children.
              </li>
            </ul>
            <p className="text_para text-textColor">
              Our hospital is a 350 bedded Super Specialty Hospital.Our strength
              is the team of about 50 highly qualified and well experienced and
              dedicated senior doctors who are ably assisted by about 250
              registered nurses and para medical staff with the focus on
              delivering most modern health care services.Doctors,Nurses and
              Paramedical staff are all holding a valid registration from with
              their respective authority i.e Medical Council of India ,The
              Kerala Nurses and Midwives Council,Indian Nursing Council etc. The
              Hospital is approved by the Municipal Authority. Our hospital is
              also equipped with 24 hour Trauma Care facility and high tech
              Operation theatre,Intensive Care Unit and Intensive Coronary
              Unit.The Emergency Department undertake all kinds of
              emergencies,including medical,surgical,orthopedics and
              pediatric.We have also a full pledged Ambulance Service. The
              Hospital is recognized by Ministry of Health and Family Welfare
              Government of India. In this connection we wish to inform you that
              we have started the new Haemodialysis unit in our hospital in the
              year 2012.At present we have 8 nos oF B Barun Haemodialysis
              machine in our hospital and the unit is functioning with full
              pledged facilities such as well qualified doctors and technicians.
              To add further The Kerala State Government have also accredited
              our Hospital(No 213/PH/TVM) under the Karunya Benevolent fund
              Scheme for the treatment package approved by the sate level
              committiee under the Head Nephrology maintainnce of Haemodialyisis
              for chronic kidney disease. Government of India Department of
              Space,Vikram Sarabhai Space Center,Trivandrum vide their letter No
              6.7/CHSS/2014 dated 04-07-2014 had empanelled Sivagiri Sree
              Narayana Medical Mission Hospital,Varkala under the contributory
              Health Service (CHSS) of VSSC/ISRO for the treatmnent of CHSS
              beneficiaries of VSSC/LPS/IISU/IIST/DAE with effect from
              20-07-2014.
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="flex items-center justify-center mb-8">
          <h4 className="heading">Our leadership</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {leaders.map((leader, index) => {
              return <LeadersCard key={leader.id} leader={leader} />;
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex items-center justify-center mb-8">
          <h4 className="heading">Mission , Vision & Values</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {about.map((about, index) => {
              return <AboutCard key={about.id} about={about} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
