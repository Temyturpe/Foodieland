import React from "react";
import HeaderMain from "../components/Header/HeaderMain";
import Categories from "../components/Categories/Categories";
import Homerecipes from "../components/Homerecipes/Homerecipes";
import Instagram from "../components/Instagram/Instagram";
import Subscribe from "../components/Subscribe/Subscribe";
import Everyone from "../components/Everyone/Everyone";
import Try from "../components/Try/Try";
import { Tryrecipes } from "../data";
import { Homerecipedata } from "../data";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <HeaderMain />
      <Categories />
      <Homerecipes home={Homerecipedata} />
      <Everyone />
      <Instagram />
      <Try data={Tryrecipes} />
      <Subscribe />
      {/* 
      
     
      
       */}
    </div>
  );
};

export default Home;
