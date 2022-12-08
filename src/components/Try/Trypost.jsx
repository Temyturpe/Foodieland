import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsStopwatchFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link } from "react-router-dom";

const Trypost = ({ data }) => {
  const [love, setLove] = useState(false);
  const handleClick = () => setLove(!love);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="trybox ">
          <Link
            to={`/recipes/${item.recipename}`}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="largescreen hidden  rounded-lg md:flex flex-col gap-5 justify-center items-center pb-6 w-full ">
              <div className="top relative">
                <div className="imgbox">
                  <img
                    src={item.picture}
                    alt=""
                    className="rounded-3xl object-cover"
                  />
                </div>
                <button className="emoji bg-white rounded-full h-12 w-12 flex justify-center items-center absolute top-2     right-2">
                  <div className={!love ? "text-[#c2b9b9]" : "text-[#FF6363]"}>
                    {" "}
                    <AiFillHeart onClick={handleClick} className=" text-xl" />
                  </div>
                </button>
              </div>
              <div className="bottom flex flex-col gap-3 sm:gap-6 justify-between ">
                <div className="up tracking-tight text-sm sm:text-lg font-semibold">
                  {item.recipename}
                </div>
                <div className="down flex gap-8 w-full">
                  <div className="left flex justify-center items-center gap-2 text-sm">
                    <BsStopwatchFill /> <span>{item.time}</span>
                  </div>
                  <div className="right flex justify-center items-center gap-2 text-sm">
                    <GiForkKnifeSpoon /> <span>{item.type}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile flex md:hidden w-full">
              <div className="trybox flex w-full justify-start items-center gap-3 ">
                <div className="left flex-1 w-full  ">
                  <div className="image relative w-full  ">
                    <div className="imgbox w-full  ">
                      <img
                        src={item.picture}
                        alt=""
                        className="rounded-3xl  h-32 md:h-60 object-cover w-full"
                      />
                    </div>
                    <button className="emoji bg-white rounded-full h-8 sm:h-12 w-8 sm:w-12 flex justify-center items-center absolute top-2 right-2">
                      <div
                        className={!love ? "text-[#c2b9b9]" : "text-[#FF6363]"}
                      >
                        {" "}
                        <AiFillHeart
                          onClick={handleClick}
                          className=" text-sm sm:text-xl"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="right flex-1 w-full">
                  <div className="bottom flex flex-col gap-3 sm:gap-6 justify-between ">
                    <div className="up tracking-tight text-sm sm:text-lg font-semibold">
                      {item.recipename}
                    </div>
                    <div className="down flex gap-8 w-full">
                      <div className="left flex justify-center items-center tracking-tighter gap-1 sm:gap-2 text-xs sm:text-sm">
                        <BsStopwatchFill /> <span>{item.time}</span>
                      </div>
                      <div className="right flex justify-center items-center tracking-tighter gap-1 sm:gap-2 text-xs sm:text-sm">
                        <GiForkKnifeSpoon /> <span>{item.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
export default Trypost;
