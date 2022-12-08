import React from "react";
import Others from "../Others/Others";
import Adimg from "../../assets/addfood.png";
import { Tryrecipes } from "../../data";

const Otherads = () => {
  return (
    <div>
      <div className="otherrecipes mt-5">
        <Others
          Tryrecipes={Tryrecipes.filter(
            (Tryrecipes) => Tryrecipes.ad === "yes"
          )}
        />
      </div>
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
  );
};

export default Otherads;
