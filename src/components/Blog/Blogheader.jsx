import React from "react";

const Blogheader = () => {
  return (
    <div>
      <div className="headerbox mt-10 flex flex-col gap-3 sm:gap-6 justify-center items-center ">
        <div className="headertitle text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight ">
          Blog &amp; Article
        </div>
        <div className="subhead text-black/60 tracking-tight text-sm text-center sm:text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </div>

        <div className="btn mt-12 flex justify-center items-center">
          <div className="btnbox flex justify-center items-center border-[.5px] border-black/10  p-1  rounded-xl">
            <form action="">
              <input
                type="text"
                name="Search"
                placeholder="Search article, news or recipe..."
                className=" pl-1 sm:pl-2 pr-10 sm:pr-24 text-xs sm:text-sm w-full outline-none bg-none"
              />
            </form>
            <button className="bg-black py-1 sm:py-3 px-3 sm:px-5  text-white text-sm sm:text-md rounded-lg sm:rounded-2xl shadow-sm">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogheader;
