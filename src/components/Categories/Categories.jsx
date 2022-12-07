import React from "react";
import Veggie from "../../assets/veggie.png";
import Suchi from "../../assets/suchi.png";
import Beef from "../../assets/beef.png";
import Chocolate from "../../assets/chocolate.png";
import Bread from "../../assets/bread.png";
import Cake from "../../assets/cake.png";
import "./categories.css";

const Categories = () => {
  return (
    <div className="my-20 ">
      <div className="heading flex justify-between items-center">
        <div className="headleft text-3xl sm:text-4xl md:text-5xl  font-semibold tracking-tighter">
          Categories
        </div>
        <button className="headright px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm md:text-md shadow-sm bg-[#E7FAFE] rounded-full">
          View All Categories
        </button>
      </div>

      <div className="list mt-14 sm:mt-28">
        <div className="listbox grid grid-cols-4 md:grid-cols-6 sm:gap-x-6 sm:gap-y-12 gap-3 items-center ">
          <div className="breakfast flex flex-col justify-between items-center rounded-2xl gap-3 sm:gap-8 pb-5 px-4 sm:px-8">
            <div className="imgbox ">
              <img
                src={Suchi}
                alt=""
                className="catimg h-9 w-full sm:h-full object-cover  "
              />
            </div>
            <div className="text text-sm sm:text-lg">Breakfast</div>
          </div>
          <div className="veggie flex flex-col justify-between items-center rounded-2xl gap-3 sm:gap-8 pb-5 px-4 sm:px-8">
            <div className="imgbox ">
              <img
                src={Veggie}
                alt=""
                className="catimg h-9 w-full  sm:h-full object-cover "
              />
            </div>
            <div className="text text-sm sm:text-lg">Vegan</div>
          </div>
          <div className="beef flex flex-col justify-between items-center rounded-2xl gap-3 sm:gap-8 pb-5 px-4 sm:px-8">
            <div className="imgbox">
              <img
                src={Beef}
                alt=""
                className="catimg h-9 w-full  sm:h-full object-cover  "
              />
            </div>
            <div className="text text-sm sm:text-lg">Meat</div>
          </div>
          <div className="cake flex flex-col justify-between items-center rounded-2xl gap-3 sm:gap-8 pb-5 px-4 sm:px-8">
            <div className="imgbox">
              <img
                src={Cake}
                alt=""
                className="catimg h-9 w-full  sm:h-full object-cover  "
              />
            </div>
            <div className="text text-sm sm:text-lg">Dessert</div>
          </div>
          <div className="bread hidden md:flex flex-col justify-between items-center rounded-2xl gap-3 sm:gap-8 pb-5 px-4 sm:px-8">
            <div className="imgbox">
              <img
                src={Bread}
                alt=""
                className="catimg  h-9 w-full  sm:h-full object-cover "
              />
            </div>
            <div className="text text-sm sm:text-lg">Lunch</div>
          </div>
          <div className="choc hidden md:flex flex-col justify-between items-center rounded-2xl gap-3 sm:gap-8 pb-5 px-4 sm:px-8">
            <div className="imgbox">
              <img
                src={Chocolate}
                alt=""
                className="catimg h-9 w-full  sm:h-full object-cover  "
              />
            </div>
            <div className="text text-sm sm:text-lg">Chocolate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
