import React, { useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { adminAuth } from "../reduxStore/slicers/adminSlicer";
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
    path: "/services",
    display: "Services",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(adminAuth(false))
  }
  const admin = useSelector((state) => {
    return state.auth.admin;
  });
  console.log(admin, "o");
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    console.log("l--");
    menuRef.current.classList.toggle("show__menu");
  };
  return (
    <header className="header flex item-center bg-softWhite" ref={headerRef}>
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
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
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
            {/* <div className="">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={userImg}
                    className="w-full rounded-full"
                    alt="user"
                  />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button className="bg-primary py-2 px-6 text-primaryWhite font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link> */}
            {admin && (
              <Link>
                <button onClick={handleLogout} className="bg-primary py-2 px-6 text-primaryWhite font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
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
    </header>
  );
};

export default Header;
