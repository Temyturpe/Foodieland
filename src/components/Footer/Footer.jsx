import React from "react";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20 pb-10">
      <div className="footerbox">
        <div className="top pb-8 border-b-[.3px] border-[d4d4d4]">
          <div className="toptop  flex flex-col sm:flex-row sm:gap-0 gap-4 justify-between items-center">
            <div className="left font-lobster text-2xl">Foodieland.</div>
            <div className="right ">
              <ul className="links flex justify-end items-center gap-8">
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
              </ul>
            </div>
          </div>
          <div className="topbottom text-black/60 mt-3">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,
          </div>
        </div>
        <div className="bottom mt-8 ">
          <div className="bottombox flex flex-col sm:flex-row gap-4 sm:gap-0  justify-end items-center">
            <div className="copyright flex-1 flex justify-center items-center">
              © 2022 Built by
              <span className="text-[#FF6363] ml-1">Temitope Okesanya</span>
            </div>
            <div className="socials flex-2">
              <ul className="socialsicons flex justify-center items-center gap-6 text-lg">
                <li className="icon ">
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
  );
};

export default Footer;
