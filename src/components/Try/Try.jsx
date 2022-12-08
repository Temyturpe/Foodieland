import React from "react";
import Trypost from "./Trypost";

const Try = ({ data }) => {
  return (
    <div className="mt-24">
      <div className="trybox w-full">
        <div className="tryheading  flex flex-col sm:flex-row justify-between items-center gap-10">
          <div className="left font-semibold text-3xl sm:text-5xl tracking-tighter">
            Try this delicious recipe to make your day
          </div>
          <div className="right text-black/60">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </div>
        </div>

        <div className="recipeboxes mt-16">
          <div className="recipes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Trypost data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Try;
