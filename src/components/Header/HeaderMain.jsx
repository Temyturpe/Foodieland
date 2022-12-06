import React from "react";
import "swiper/css/bundle";
import { BsStopwatchFill, BsPlayFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import Badge from "../../assets/Badge.png";
import Scroll from "../../assets/scroll.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// header data
import { Headerdata } from "../../data";

// import required modules
import { Autoplay } from "swiper";

const HeaderMain = () => {
  return (
    <div
      className="relative w-full
    h-auto "
    >
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full "
      >
        {Headerdata.map((item, index) => {
          const {
            recipeName,
            recipeSummery,
            time,
            mainIngredient,
            authorPic,
            authorName,
            date,
            dishImg,
          } = item;
          return (
            <SwiperSlide key={index} className="w-full">
              <div className="mainmain w-full relative  flex  justify-center items-center  ">
                <div className="views w-full ">
                  <div className=" hidden largescreen container w-[100%] md:flex  justify-center items-center h-[526px] ">
                    <div className="leftside flex-1 bg-[#E7FAFE] p-4 md:p-9 rounded-l-3xl h-full">
                      <div className="hot p-1 md:p-2 rounded-full flex justify-center items-center w-[100px] md:w-[156px] gap-2 md:gap-3 bg-white">
                        <div className="image">
                          <img
                            src={Scroll}
                            alt=""
                            className="w-3 md:w-6 h-3 md:h-6 "
                          />
                        </div>
                        <div className="name text-xs md:text-sm ">
                          Hot Recipes
                        </div>
                      </div>
                      <div className="top flex flex-col justify-between h-full">
                        <div className="texts flex flex-col gap-4 mt-6">
                          <div className="big text-4xlpr-[40px] md:text-[64px] leading-tight tracking-tighter font-bold pr-0 md:pr-[30px] ">
                            {recipeName}
                          </div>
                          <div className="small text-black/60 text-md">
                            {recipeSummery}
                          </div>
                          <div className="icontext flex justify-start items-center gap-6">
                            <div className="box1 py-2 rounded-full flex justify-center items-center w-[139px] gap-3 bg-black/5">
                              <div className="icon">
                                <BsStopwatchFill />
                              </div>
                              <div className="text text-sm">{time}</div>
                            </div>
                            <div className="box2 py-2 rounded-full flex justify-center items-center w-[139px] gap-3 bg-black/5">
                              <div className="icon">
                                <GiForkKnifeSpoon />
                              </div>
                              <div className="text text-sm">
                                {mainIngredient}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="buttonicon flex justify-between items-center pb-10">
                          <div className="box1 flex justify-start items-center gap-4">
                            <div className="left">
                              <img
                                src={authorPic}
                                alt=""
                                className="md:h-14 h-10 w-10 md:w-14"
                              />
                            </div>
                            <div className="right flex flex-col gap-1">
                              <div className="top font-semibold text-sm md:text-md">
                                {authorName}
                              </div>
                              <div className="bottom text-xs md:text-sm text-black/60">
                                {date}
                              </div>
                            </div>
                          </div>
                          <button className="box2 bg-black  flex justify-center items-center gap-3 px-3 md:px-5 py-2 md:py-3 rounded-xl">
                            <div className="text text-white text-xs md:text-sm">
                              View Recipes
                            </div>
                            <div className="icon bg-white flex justify-center items-center rounded-full p-[.5px]">
                              <BsPlayFill />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="rightside flex-1 w-full h-full">
                      <img
                        src={dishImg}
                        alt=""
                        className="w-full h-full object-cover rounded-r-3xl "
                      />
                    </div>
                  </div>
                  <div className="moble md:hidden flex rounded-3xl">
                    <div className="bg relative w-[100%]">
                      <img
                        src={dishImg}
                        alt=""
                        className=" w-[100%] h-64 sm:h-[350px] object-cover rounded-3xl"
                      />
                      <div className="ontop absolute bg-black/40 h-full w-full top-0 left-0  rounded-3xl p-4 flex flex-col justify-between">
                        <div className="toptop">
                          <div className="hot p-1 md:p-2 rounded-full flex justify-center items-center w-[100px] md:w-[156px] gap-2 md:gap-3 bg-white mb-2">
                            <div className="image">
                              <img
                                src={Scroll}
                                alt=""
                                className="w-3 md:w-6 h-3 md:h-6 "
                              />
                            </div>
                            <div className="name text-xs md:text-sm ">
                              Hot Recipes
                            </div>
                          </div>
                          <div className="texts text-white sm:mt-16">
                            <div className="name text-3xl sm:text-5xl  font-semibold tracking-tight">
                              {recipeName}
                            </div>
                          </div>
                          <div className="icontext flex text-white justify-start items-center mt-5 gap-6">
                            <div className="box1  rounded-full flex justify-center items-center w-[115px] sm:w-[139px]  gap-3 ">
                              <div className="icon">
                                <BsStopwatchFill />
                              </div>
                              <div className="text text-sm">{time}</div>
                            </div>
                            <div className="box2  rounded-full flex justify-center items-center w-[115px] sm:w-[139px] gap-3">
                              <div className="icon">
                                <GiForkKnifeSpoon />
                              </div>
                              <div className="text text-sm">
                                {mainIngredient}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="buttonicon flex justify-between items-center text-white">
                          <div className="box1 flex justify-start items-center gap-2 sm:gap-4 ">
                            <div className="left">
                              <img
                                src={authorPic}
                                alt=""
                                className="md:h-14 h-10 w-10 md:w-14 "
                              />
                            </div>
                            <div className="right flex flex-col gap-1">
                              <div className="top font-semibold text-sm md:text-md">
                                {authorName}
                              </div>
                              <div className="bottom text-xs md:text-sm text-white">
                                {date}
                              </div>
                            </div>
                          </div>
                          <button className="box2 bg-black  flex justify-center items-center gap-2 sm:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-xl">
                            <div className="text text-white text-xs md:text-sm">
                              View Recipes
                            </div>
                            <div className="icon bg-white flex justify-center items-center rounded-full p-[.5px]">
                              <BsPlayFill className="text-black" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="badge hidden md:flex absolute top-2 sm:top-10 left-[73%] sm:left-[47%]">
                  <img
                    src={Badge}
                    alt=""
                    className="w-[60px] md:w-[150px] h-[60px] md:h-[150px]"
                  />
                </div>
              </div>{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default HeaderMain;
