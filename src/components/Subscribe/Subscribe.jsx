import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-24 w-full">
      <div className="subbox bg-subg h-auto bg-center bg-cover bg-no-repeat flex justify-center items-center rounded-xl sm:rounded-3xl">
        <div className="subcontent  px-1 md:px-64 py-2 sm:py-20 text-center tracking-tighter w-full">
          <div className="title text-2xl sm:text-4xl  md:text-5xl font-semibold">
            Deliciousness to your inbox
          </div>
          <div className="subtitle text-black/60 text-sm sm:text-md mt-8 ">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </div>
          <div className="btn mt-12 flex justify-center items-center">
            <div className="btnbox flex justify-center items-center bg-white p-2  rounded-xl">
              <form action="">
                <input
                  type="text"
                  name="subscribe"
                  placeholder="Your email address..."
                  className="py-1 sm:py-2 px-0 sm:px-8  outline-none w-full"
                />
              </form>
              <button className="bg-black py-2 sm:py-3 px-2 sm:px-5 text-sm sm:text-md text-white rounded-2xl shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
