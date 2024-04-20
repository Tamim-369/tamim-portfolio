import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import { Link, Element } from "react-scroll";
import { linkData } from "../siteData";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import "../styles/styles.css";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that effect runs only once

  return (
    <nav
      className={`navbar-bg flex fixed w-full justify-around items-center ${
        scrolled ? "nav-black" : "nav-transparent"
      } `}
    >
      <div
        className={`logo  p-4 text-neutral-200 gap-2 flex justify-center items-center `}
      >
        <img className="h-10 w-10" src={logo} alt="" />
        <h1 className="text-xl font-sans font-bold">Ashiqur Rahman</h1>
      </div>
      <div className="links ">
        <div className="sm:flex hidden  justify-center font-sans text-slate-200 items-center gap-2">
          {linkData.map((item) => (
            <Link
              key={item.id}
              className={`${
                active === item.id ? "text-white" : "text-inactive"
              } m-1 p-1 text-lg font-sans font-bold-custom cursor-pointer hover:text-white`}
              to={item.url}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setActive(item.id)}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="toggle-section flex sm:hidden ">
          <div
            className="toggle-btn text-neutral-50 text-xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <GiHamburgerMenu />
          </div>
          <div
            className={`flex-col justify-start py-6 w-full min-h-screen border-l-2 border-l-purple-500  items-center absolute text-neutral-50  top-0  left-100 right-0 z-1 nav-black border-solid animate-nav ${
              open ? "flex" : "hidden"
            } `}
          >
            {open &&
              linkData.map((item) => (
                <Link
                  key={item.id}
                  className={`${
                    active === item.id ? "text-white " : "text-inactive "
                  } m-1  font-bold-custom text-xl cursor-pointer hover:text-white p-3  text-center  rounded-lg w-8/12`}
                  to={item.url}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setActive(item.id);
                    setOpen(false);
                  }}
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
