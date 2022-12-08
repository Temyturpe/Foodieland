import React from "react";
import { useParams } from "react-router-dom";
import { BsStopwatchFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { AiOutlinePrinter } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsPlayFill } from "react-icons/bs";
import Otherads from "../components/Others/Otherads";
import Subscribe from "../components/Subscribe/Subscribe";
import Othermay from "../components/Others/Othermay";

const Homerecipes = ({ home }) => {
  const { recipename } = useParams();
  return (
    <div className="">
      {home
        .filter((item) => item.recipename === recipename)
        .map((item, index) => (
          <div key={index} className="detailbox">
            <div className="recipehead w-full ">
              <div className="headbox  w-full flex flex-col sm:flex-row justify-start items-center ">
                <div className="left w-full sm:w-[60%]">
                  <div className="top text-2xl sm:text-[34px] leading-tighter tracking-tighter font-semibold">
                    {item.recipename}
                  </div>
                  <div className="bottom mt-9 flex flex-wrap justify-start sm:items-center items-start gap-4 sm:gap-10">
                    <div className="author box1 flex justify-start items-center gap-2 sm:gap-4 border-r-[.4px] border-black/10 pr-3 sm:pr-10">
                      <div className="left">
                        <img
                          src={item.author}
                          alt=""
                          className="md:h-10 h-7 w-7 md:w-10"
                        />
                      </div>
                      <div className="right flex flex-col gap-1">
                        <div className="top font-semibold text-xs sm:text-sm md:text-md">
                          {item.authorName}
                        </div>
                        <div className="bottom text-xs md:text-sm text-black/60">
                          {item.date}
                        </div>
                      </div>
                    </div>
                    <div className="preptime box1 flex justify-start items-center gap-2 sm:gap-4 border-r-[.4px] border-black/10 pr-3 sm:pr-10">
                      <div className="left">
                        <div className="icon">
                          <BsStopwatchFill />
                        </div>
                      </div>
                      <div className="right flex flex-col gap-1">
                        <div className="top font-semibold text-xs sm:text-sm md:text-md">
                          Prep time
                        </div>
                        <div className="bottom text-xs md:text-sm text-black/60">
                          {item.preptime}
                        </div>
                      </div>
                    </div>
                    <div className="cooktime box1 flex justify-start items-center gap-2 sm:gap-4 border-r-[.4px] border-black/10 pr-3 sm:pr-10">
                      <div className="left">
                        <div className="icon ">
                          <BsStopwatchFill />
                        </div>
                      </div>
                      <div className="right flex flex-col gap-1">
                        <div className="top font-semibold text-xs sm:text-sm md:text-md">
                          Cook time
                        </div>
                        <div className="bottom text-xs md:text-sm text-black/60">
                          {item.cooktime}
                        </div>
                      </div>
                    </div>

                    <div className="icons">
                      <div className="icon">
                        <GiForkKnifeSpoon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right w-full sm:w-[40%] ">
                  <div className="rightbox flex justify-end items-center gap-3 sm:gap-6 ">
                    <div
                      onclick="window.print()"
                      className="printbox cursor-pointer"
                    >
                      <div className="printicon text-xl sm:text-3xl p-2 sm:p-5 bg-[#E7FAFE] rounded-full">
                        <AiOutlinePrinter />
                      </div>
                      <div className="printtext text-xs flex justify-center items-center mt-1 ">
                        PRINT
                      </div>
                    </div>
                    <div className="sharebox cursor-pointer">
                      <div className="share text-xl sm:text-3xl p-2 sm:p-5 bg-[#E7FAFE] rounded-full">
                        <FiShare />
                      </div>
                      <div className="sharetext text-xs flex justify-center items-center mt-1 ">
                        SHARE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="video-nutrient mt-8">
              <div className="vid-nutrientbox flex flex-col sm:flex-row justify-between items-center gap-8">
                <div className="left w-full sm:w-[60%] bg-blue-200 rounded-3xl">
                  <div className="video relative">
                    <div className="imgage">
                      <img
                        src={item.picture}
                        alt=""
                        className="w-full h-[300px] sm:h-[450px] object-cover rounded-3xl "
                      />
                    </div>
                    <div className="play absolute text-xl sm:text-2xl text-[#181945] top-[47.5%] left-[47.5%] p-3 sm:p-5 rounded-full bg-white/80">
                      <BsPlayFill />
                    </div>
                  </div>
                </div>
                <div className="right w-full sm:w-[40%] h-[330px] sm:h-[450px]  bg-[#E7FAFE] rounded-3xl flex flex-col justify-between p-5">
                  <div className="detailboxtop  ">
                    <div className="first text-xl sm:text-2xl font-semibold tracking-tighter">
                      Nutrition Information
                    </div>
                    <div className="second mt-4">
                      <ul className="list">
                        <li className="item flex justify-between items-center text-md sm:text-lg border-b-[.4px] border-black/10 pb-2">
                          <div className="left text-black/60">Calories</div>
                          <div className="right text-sm sm:text-md">
                            {item.calories}
                          </div>
                        </li>
                        <li className="item flex justify-between items-center text-md sm:text-lg border-b-[.4px] border-black/10 pb-2">
                          <div className="left text-black/60">Total Fat</div>
                          <div className="right text-sm sm:text-md">
                            {item.totalfat}
                          </div>
                        </li>
                        <li className="item flex justify-between items-center text-md sm:text-lg border-b-[.4px] border-black/10 pb-2">
                          <div className="left text-black/60">Protein</div>
                          <div className="right text-sm sm:text-md">
                            {item.protein}
                          </div>
                        </li>
                        <li className="item flex justify-between items-center text-md sm:text-lg border-b-[.4px] border-black/10 pb-2">
                          <div className="left text-black/60">
                            Carborhydates
                          </div>
                          <div className="right text-sm sm:text-md">
                            {item.carborhydrate}
                          </div>
                        </li>
                        <li className="item flex justify-between items-center text-md sm:text-lg border-b-[.4px] border-black/10 pb-2">
                          <div className="left text-black/60">Cholesterol</div>
                          <div className="right text-sm sm:text-md">
                            {item.cholesterol}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="detailboxbottom">
                    <div className="descriptionbox flex justify-center text-sm sm:text-md items-center text-center text-black/60">
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="summery mt-8">
              <div className="summerybox text-black/60 text-md tracking-tight">
                {item.summery}
              </div>
            </div>
            <div className="ingrdient-recipes my-8">
              <div className="ingredientsbox flex flex-col sm:flex-row justify-between items-start gap-12">
                <div className="ingredient-steps left w-full sm:w-[65%] ">
                  <div className="ingredientstep">
                    <div className="title text-2xl sm:text-4xl font-semibold tracking-tight">
                      Ingredients
                    </div>
                    <div className="ingredientslist mt-4">
                      <ul className="ingredientslist mt-2 sm:mt-4 ">
                        {item.dish.map((dish) => (
                          <li
                            key={dish.id}
                            className=" border-b-[1px] border-black/10 py-3 sm:py-5 text-md sm:text-lg"
                          >
                            {" "}
                            <form
                              action=""
                              className="flex justify-start items-center"
                            >
                              <input
                                type="checkbox"
                                name="ingredient"
                                value="ingredient"
                              />
                              <label className="ml-4">{dish.ingredients}</label>
                            </form>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="Direction mt-8 ">
                      <div className="directionbox">
                        <div className="directionhead text-2xl sm:text-4xl font-semibold tracking-tight">
                          Directions
                        </div>
                        {item.direction.map((direction) => (
                          <div
                            key={direction.id}
                            className=" border-b-[1px] border-black/10 py-3 sm:py-5 "
                          >
                            <ol className="cookingsteps font-semibold text-lg sm:text-2xl ">
                              <li>
                                <span className="ml-1 ">
                                  {direction.number}.
                                </span>{" "}
                                {direction.steptitle}
                              </li>
                            </ol>
                            <div className="step text-black/60 text-sm sm:text-md mt-1">
                              {direction.step}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right w-full sm:w-[35%]">
                  <div className="othersbox">
                    <div className="title text-4xl font-semibold">
                      Other Recipe
                    </div>
                    <Otherads />
                  </div>
                </div>
              </div>
            </div>
            <div className="sub">
              <Subscribe />
            </div>
            <div className="maylike mt-32">
              <div className="title text-4xl font-semibold tracking-tight flex justify-center items-center">
                You may like these recipe too
              </div>
              <div className="otherrecipes mt-20">
                <Othermay />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Homerecipes;
