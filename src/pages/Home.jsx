import React from "react";
import HeaderMain from "../components/Header/HeaderMain";
import Categories from "../components/Categories/Categories";
import Homerecipes from "../components/Homerecipes/Homerecipes";
// import { Tryrecipes } from "../data";
import { Homerecipedata } from "../data";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <HeaderMain />
      <Categories />
      <Homerecipes home={Homerecipedata} />
      {/* 
      
      <Everyone />
      <Instagram />
      <Try data={Tryrecipes} />
      <Subscribe /> */}
    </div>
  );
};

export default Home;
