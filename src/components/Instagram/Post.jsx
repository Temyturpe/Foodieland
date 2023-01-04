import React from "react";

import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import Oval from "../../assets/Oval.png";
import Oval2 from "../../assets/Oval2.png";

const Post = ({ item }) => {
  return (
    <div>
      {" "}
      <div className="instagram-boxes mt-10" key={item.id}>
        <div className="single-post bg-white rounded-lg shadow-sm">
          <div className="first flex justify-between items-center px-1">
            <div className="left flex justify-between items-center gap-3 ">
              <div className="avater ">
                <img src={Oval} alt="" />
              </div>
              <div className="nameaddress ">
                <div className="top text-sm flex items-center gap-1">
                  Foodieland.{" "}
                  <span className="verify">
                    <MdVerified className="text-[#3897F0]" />
                  </span>
                </div>
                <div className="bottom text-xs text-black/60">Tokyo, Japan</div>
              </div>
            </div>
            <div className="right">
              <BsThreeDots className="text-[#D8D8D8]" />
            </div>
          </div>
          <div className="second w-full relative mt-2 ">
            <img
              src={item.picture}
              alt=""
              className="w-full h-[290px] object-cover"
            />
            <div className="number bg-black/70 text-[#F9F9F9] text-[9.28px] py-[.4px] px-1 rounded-3xl w-6 flex justify-center items-center absolute top-3 right-3">
              1/3
            </div>
          </div>
          <div className="third flex justify-between items-center mt-3 text-lg px-2">
            <div className="iconleft flex-1 flex justify-start items-center gap-4">
              <div className="icons">
                <AiOutlineHeart className="text-xl" />
              </div>
              <div className="icons">
                <FaRegComment />
              </div>
              <div className="icons">
                <FaRegPaperPlane className="text-md" />
              </div>
            </div>
            <div className="iconcenter flex-1 flex justify-center items-center">
              <div className="icon ">
                <BsThreeDots className="text-2xl" />
              </div>
            </div>
            <div className="iconright flex-1 flex justify-end items-center">
              <div className="icon">
                <BsBookmark />
              </div>
            </div>
          </div>
          <div className="fourth flex items-center gap-2 mt-3 px-2">
            <div className="avi">
              <img src={Oval2} alt="" className="h-5 w-5 object-cover" />
            </div>
            <div className="text text-xs">
              Liked by <span className="font-semibold">craig_love</span> and{" "}
              <span className="font-semibold">44,686</span> others
            </div>
          </div>
          <div className="fifth mt-3 px-2">
            <div className="summery text-xs">
              <span className="font-semibold"> Foodieland. </span>
              <span>{item.summary}</span>
            </div>
          </div>
          <div className="sixth py-5 px-2 ">
            <div className="date text-black/40 text-[9px]">September 19</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
