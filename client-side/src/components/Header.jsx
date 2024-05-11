import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { adminAuth } from "../reduxStore/slicers/adminSlicer";
import Menu from "./Menu";
import { useSpring, animated } from "react-spring";
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a doctor",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const [hovering, setHovering] = useState(false);

  const handleLogout = () => {
    dispatch(adminAuth(false));
  };
  const admin = useSelector((state) => {
    return state.auth.admin;
  });

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };

  const menuAnimation = useSpring({
    opacity: hovering ? 1 : 0,
    transform: hovering ? "scale(1)" : "scale(1)",
  });

  return (
    <header
      className="header fixed w-full flex items-center top-0 bg-primaryWhite z-50"
      onMouseLeave={() => setHovering(false)}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="w-[54px] h-[54px]" />
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primary text-[16px] leading-7 font-[600]"
                        : "text-secondary text-[16px] leading-7 font-[500] hover:text-primary"
                    }
                    onMouseEnter={() => {
                      setHovering(false);
                    }}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/services"
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primary text-[16px] leading-7 font-[600]"
                      : "text-secondary text-[16px] leading-7 font-[500] hover:text-primary"
                  }
                  onMouseEnter={() => {
                    setHovering(true);
                  }}
                >
                  Speciality
                </NavLink>
              </li>
              {admin && (
                <NavLink
                  to="/dashboard"
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-primary text-[16px] leading-7 font-[600]"
                      : "text-secondary text-[16px] leading-7 font-[500] hover:text-primary"
                  }
                >
                  dashboard
                </NavLink>
              )}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {admin && (
              <Link>
                <button
                  onClick={handleLogout}
                  className="bg-primary py-2 px-6 text-primaryWhite font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
                >
                  Logout
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
      <animated.div
        className="absolute top-[90%] p-4 px-8 w-full md:[700px] md:ml-[0%] overflow-hidden rounded z-10 justify-center flex bg-white"
        style={menuAnimation}
      >
        {hovering && <Menu />}
      </animated.div>
    </header>
  );
};

export default Header;
