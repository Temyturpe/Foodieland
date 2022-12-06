import React from "react";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import "./topbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Topbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="Topbar fixed z-10 left-0 top-0 w-full overflow-hidden  shadow-sm bg-white ">
      <div className="Topbar-box  px-4 sm:px-10 py-4 sm:py-8 flex justify-between items-center">
        <div className="leftside font-lobster text-2xl">Foodieland.</div>
        <div className="middle md:flex hidden">
          <div className="navbox">
            <ul className="navs font-inter flex justify-center items-center gap-8 text-lg">
              <li className="nav">
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </Link>
              </li>

              <li className="nav">
                <Link
                  to="/blogs"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Blog
                </Link>
              </li>
              <li
                className="nav"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <Link to="/contactpage">Contact</Link>
              </li>
              <li className="nav">
                {" "}
                <Link
                  to="/aboutus"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightside font-inter md:flex hidden  ">
          <div className="socialsbox">
            <ul className="socialsicons flex justify-center items-center gap-6 text-lg">
              <li className="icon">
                <GrFacebookOption />
              </li>
              <li className="icon">
                <GrTwitter />
              </li>
              <li className="icon">
                <GrInstagram />
              </li>
            </ul>
          </div>
        </div>

        {/* menubar */}
        <div
          onClick={handleClick}
          className="md:hidden  flex z-50 pr-2 sm:pr-7 "
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <div
          className={
            !nav
              ? "hidden"
              : " fixed top-0 left-32 w-full z-40 h-screen bg-white pr-20 flex flex-col justify-center items-center text-black"
          }
        >
          <div className="navbody flex justify-center items-center w-full">
            <div className=" flex flex-col justify-center items-center gap-14 w-full">
              <div className="links text-2xl flex flex-col gap-6 justify-center items-center">
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/blogs"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Blog
                </Link>
                <Link
                  to="/contactpage"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </Link>
                <Link
                  to="/aboutus"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  About Us
                </Link>
              </div>
              <div className="socialsbox">
                <ul className="socialsicons flex justify-center items-center gap-6 text-xl">
                  <li className="icon">
                    <GrFacebookOption />
                  </li>
                  <li className="icon">
                    <GrTwitter />
                  </li>
                  <li className="icon">
                    <GrInstagram />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
