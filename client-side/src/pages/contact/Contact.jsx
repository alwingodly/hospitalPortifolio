import React from "react";
import "./contact.css";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Pattern from "../../assets/svg/Pattern";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "239d56fe-3ec4-4aa9-bdd6-7df4b45eafb1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    console.log(json, "kkk");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <section className="contact-section mt-20 md:mt-8">
      {/* <div className="pattern-bg">
        <Pattern />
      </div> */}
      <h4 className="relative sectionHeader text-primary">contact us</h4>

      <div className="contactForm">
        <form className="contact-form" action="#" onSubmit={onSubmit}>
          <input type="text" className="input shadow" placeholder="your name" />
          <input
            type="text"
            className="input shadow"
            placeholder="your email"
          />
          <input
            type="text"
            className="input shadow"
            placeholder="your Subject"
          />
          <textarea
            className="input shadow"
            cols="30"
            rows="14"
            placeholder="Your message..."
          ></textarea>
          <button type="submit" className="input submit bg-primary">
            Send Message
          </button>
        </form>

        <div className="flex flex-col items-center md:items-start md:my-8">
          <div>
            <div className="method p-2 flex mt-2 ">
              <div className="mx-4 flex items-center">
                <ImLocation size={24} className="text-textColor" />
              </div>
              <article className="text-left">
                <h1 className="sub-heading text-sm text-textColor">Location</h1>
                <p className="text-sm text-textColor">Varkala</p>
              </article>
            </div>

            <div className="method p-2 flex mt-2 ">
              <div className="mx-4 flex items-center">
                <SiGmail size={24} className="text-textColor" />
              </div>
              <article className="text-left">
                <h1 className="sub-heading text-sm text-textColor">Email</h1>
                <p className="text-sm text-textColor">
                  alwinaswin123@gmail.com
                </p>
              </article>
            </div>

            <div className="method p-2 flex mt-2 mb-4">
              <div className="mx-4 flex items-center">
                <BsFillTelephoneForwardFill
                  size={24}
                  className="text-textColor"
                />
              </div>
              <article className="text-left">
                <h1 className="sub-heading text-sm text-textColor">Phone</h1>
                <p className="text-sm text-textColor">+91 9746564270 </p>
              </article>
            </div>
          </div>
          <div className="map-container">
            <div className="mapBg bg-secondary"></div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.797804139183!2d76.73093974475752!3d8.72989372007613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05efe39e4ec491%3A0x685bf046d8f1d557!2sDoctor%20SN%20hospital!5e0!3m2!1sen!2sin!4v1715025059488!5m2!1sen!2sin"
                width="500"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
