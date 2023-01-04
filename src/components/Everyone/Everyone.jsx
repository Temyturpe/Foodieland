import React from "react";
import Chef from "../../assets/chefevery.png";

const Everyone = () => {
  return (
    <div className="mt-20 sm:mt-28">
      <div className="everyonebox flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="left flex-1">
          <div className="big text-3xl sm:text-5xl font-semibold tracking-tighter">
            Everyone can be a chef in their own kitchen
          </div>
          <div className="small text-black/60 text-sm sm:text-md mt-6 sm:mt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            enim alias, dolorem doloribus quasi nam itaque fugit nisi,
            voluptatibus consequuntur quos.
          </div>
          <div className="bottonbox flex justify-end md:justify-start ">
            {" "}
            <button className="btn bg-black mt-10 sm:mt-16 text-white text-sm px-3 sm:px-5 py-2 sm:py-3 rounded-lg shadow-sm ">
              Learn More
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <div className="imgbox w-full">
            <img
              src={Chef}
              alt=""
              className="w-[100%] md:h-full sm:h-[400px] h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Everyone;
