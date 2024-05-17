import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { fadeIn } from "../utils/Variants";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/about/About";
import ServiceList from "../components/services/ServiceList";
import DoctorsList from "../components/doctors/DoctorsList";
import FaqList from "../components/faq/FaqList";
import Testimonial from "../components/testimonial/Testimonial";
import HomeSlider from "../components/HomeSlider";
import { HiArrowNarrowRight } from "react-icons/hi";
import HomeGallary from "./gallary/HomeGallary";
const Home = () => {
  return (
    <>
      <>
        <section>
          {/* <div className="hero__section 2xl:h-[700px]">
            <div className="container">
              <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                <div>
                  <div className="lg:w-[570px]">
                    <h1 className="text-[32px] leading-[46px] text-textColor font-[800] md:text-[60px] md:leading-[70px]">
                      We help patients live a healthy, longer life
                    </h1>
                    <p className="text_para">
                      In our commitment to revolutionizing healthcare, our
                      hospital management platform integrates cutting-edge
                      technology, compassionate care, and strategic innovation
                      to deliver unparalleled patient experiences, empower
                      healthcare professionals, and drive positive outcomes for
                      all stakeholders within the complex healthcare ecosystem.
                    </p>
                    <button className="btn">Request an Appointment</button>
                  </div>

                  <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                    <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                        30+
                      </h2>
                      <span className="w-[100px] h-2 bg-secondary rounded-full block mt-[-14px]"></span>
                      <p className="text_para">Years of Experiance</p>
                    </div>

                    <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                        15+
                      </h2>
                      <span className="w-[100px] h-2 bg-secondary rounded-full block mt-[-14px]"></span>
                      <p className="text_para">Clinical Locations</p>
                    </div>

                    <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                        100%
                      </h2>
                      <span className="w-[100px] h-2 bg-secondary rounded-full block mt-[-14px]"></span>
                      <p className="text_para">Patient Satisfaction</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[30px] justify-end">
                  <div>
                    <img className="w-full" src={heroImg01} alt="" />
                  </div>
                  <div className="mt-[30px]">
                    <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                    <img className="w-full mb-[30px]" src={heroImg03} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <HomeSlider/>
        </section>

        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing the best medical services
              </h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health system offers
                unmatched, expert health care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] gap-5 mt-[30px] lg:mt-[50px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 text-secondary font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, exoert health care. From the to the clinic
                  </p>

                  <Link
                    to="/doctor"
                    className="w-[44px] h-[44px] rounded-full border-solid border-light mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-primaryWhite w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-secondary font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, exoert health care. From the to the clinic
                  </p>

                  <Link
                    to="/doctor"
                    className="w-[44px] h-[44px] rounded-full border-solid border-light mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-primaryWhite w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-secondary font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, exoert health care. From the to the clinic
                  </p>

                  <Link
                    to="/doctor"
                    className="w-[44px] h-[44px] rounded-full border-solid border-light mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-primaryWhite w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <HomeGallary/> */}
        </section>

        <About />

        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Specialities</h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health system offers
                unmatched, expert health care
              </p>
            </div>
            <ServiceList />
            <div className="flex justify-center" >
              <button className="btn flex">View more <span className="ml-2"><HiArrowNarrowRight size={24}/></span></button>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="flex item-center justify-between flex-col lg:flex-row">
              <motion.div
              variants={fadeIn("left" , 0.1)}
              initial = "hidden"
              whileInView={"show"}
              viewport={{once: false , amount:0.1}}
              className="xl:w-[670px]"
              >
                <h2 className="heading">
                  Get virtual treatment <br /> anytime
                </h2>
                <ul className="pl-4">
                  <li className="text_para">
                    1. Schedule the appointment directly.
                  </li>
                  <li className="text_para">
                    2. Search for your physicians here , and contact there
                    office
                  </li>
                  <li className="text_para">
                    3. View our physicians who are accepting new patients, use
                    the online scheduling tool to select an appointment time
                  </li>
                </ul>
                <Link to="/">
                  <button className="btn">Learn More</button>
                </Link>
              </motion.div>

              <motion.div
              variants={fadeIn("right" , 0.1)}
              initial = "hidden"
              whileInView={"show"}
              viewport={{once: false , amount:0.1}}
              className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ">
                <img src={featureImg} alt="" />
                <div className="w-[150px] lg:w-[248px] bg-primaryWhite absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                  <div className="flex items-center justify-between">
                    <div className="flex item-center gap-[6px] lg:gap-3">
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[600]">
                        Tue, 24
                      </p>
                      <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[600]">
                        10:00 AM
                      </p>
                    </div>
                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center bg-yellow-500 rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                      <img src={videoIcon} alt="" />
                    </span>
                  </div>

                  <div className="w-[65px] lg:w-[96px] text-center bg-primary py-1 lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-softWhite font-[500] mt-2 lg:mt-4 rounded-full">
                    consultation
                  </div>
                  <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                    <img src={avatarIcon} alt="" />
                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-textColor">
                      Wayne Collins
                    </h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Greate Doctors</h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health system offers
                unmatched, expert health care
              </p>
            </div>
            <DoctorsList />
          </div>
        </section>

        <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0">
              <div className="w-1/3 hidden md:block">
                <img src={faqImg} alt="" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="heading">
                  Most questions by out beloved patients
                </h2>
                <FaqList />
              </div>
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
    </>
  );
};

export default Home;
