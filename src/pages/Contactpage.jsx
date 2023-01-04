import React from "react";
import Contact from "../components/Contact/Contact";
import Othermay from "../components/Others/Othermay";
import Subscribe from "../components/Subscribe/Subscribe";

const Contactpage = () => {
  return (
    <div className="mt-12">
      <div className="title text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight flex justify-center items-center">
        Contact Us
      </div>
      <Contact />
      <Subscribe />
      <div className="maylike mt-32">
        <div className="title text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight flex justify-center items-center">
          Check out the delicious recipe
        </div>
        <div className="otherrecipes mt-20">
          <Othermay />
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
