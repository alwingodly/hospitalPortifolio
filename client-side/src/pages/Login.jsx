import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 lg:px-0 mb-[75px]">
      <div className="w-full max-w-[570px] mx-auto rounded-lg md:p-10 ">
        <h3 className="text-textColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primary">Welcome</span> Back 🎉
        </h3>

        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              onChange={handleInputChange}
              required
              value = {formData.email}
              className="w-full py-2 px-4 border-b border-solid border-tertiary focus:outline-none focus:border-b-primary leading-7 text-textColor placeholder:text-secondary cursor-pointer"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value = {formData.password}
              onChange={handleInputChange}
              required
              className="w-full py-2 px-4 border-b border-solid border-tertiary focus:outline-none focus:border-b-primary leading-7 text-textColor placeholder:text-secondary cursor-pointer"
            />
          </div>

          <div className="mt-7">
           <button type="submit" className="w-full bg-primary text-white text-[18px] leading-[30px] rounded-lg px-4 py-2">
            Login
           </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Dont't have an account.? <Link to = '/register' className="text-primary">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
