import React from "react";
import "./homerecipe.css";
import RecipeBox from "./RecipeBox";
import Adimg from "../../assets/addfood.png";

const Homerecipes = ({ home }) => {
  return (
    <div className="sm:mt-28 mt-24 overflow-hidden">
      <div className="heading flex justify-center items-center flex-col gap-4 px-6 text-center md:px-64">
        <div className="top text-3xl sm:text-4xl md:text-5xl font-semibold">
          Simple and tasty recipes
        </div>
        <div className="bottom text-black/60 text-center text-sm sm:text-md">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </div>
      </div>

      <div className="main my-14 ">
        <div className="mainbox grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-3 sm:px-0">
          <RecipeBox home={home} />
          <div className="h-[350px] md:h-[400px] adbox ">
            <div className="mainbox h-full bg-greenimg bg-cover bg-center bg-no-repeat flex pt-6 pb-4 flex-col justify-between items-center ">
              {" "}
              <div className="top font-lobster text-white text-3xl px-10 md:px-14  text-center">
                Don't forget to eat healthy food
              </div>
              <div className="middle ">
                <img src={Adimg} alt="" className="h-60 w-60  -mt-4" />
              </div>
              <div className="bottom  text-white "> www.foodieland.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homerecipes;
