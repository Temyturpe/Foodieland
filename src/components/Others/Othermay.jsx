import React from "react";
import { Tryrecipes } from "../../data";
import Trypost from "../Try/Trypost";

const Othermay = () => {
  return (
    <div>
      <div className="recipes grid grid-cols-1  md:grid-cols-4 gap-6">
        <Trypost data={Tryrecipes.filter((data) => data.id < 5)} />
      </div>
    </div>
  );
};

export default Othermay;
