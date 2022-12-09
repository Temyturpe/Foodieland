import React from "react";
import Post from "./Post";
import { Instagramdata } from "../../data";
import "./insta.css";

import { FaInstagram } from "react-icons/fa";

const Instagram = ({ item }) => {
  return (
    <div className="mt-20 sm:mt-36  instamain px-4 py-10 sm:py-20  ">
      <div className="instagram-box w-full ">
        <div className="title w-full flex flex-col gap-5 justify-center items-center px-6 sm:px-52 text-center">
          <div className="main-title text-2xl sm:text-5xl tracking-tight">
            Check out @foodieland on Instagram
          </div>
          <div className="sub-title text-black/60 text-sm sm:text-md">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </div>
        </div>
        <div className="mt-10 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Instagramdata.map((item) => {
            return <Post item={item} key={item.id} />;
          })}
        </div>

        <div className="btnbox mt-10 sm:mt-20 flex justify-center items-center">
          <button className="bg-black text-white flex items-center justify-center gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-sm text-sm sm:text-md">
            Visit Our Intagram{" "}
            <span>
              <FaInstagram className="text-lg " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
