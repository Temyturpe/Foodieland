import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Others = ({ Tryrecipes }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      {Tryrecipes.map((Tryrecipes) => (
        <div
          className="trybox rounded-lg flex flex-col gap-5 justify-center items-center pb-6"
          key={Tryrecipes.id}
        >
          <Link
            to={`/recipes/${Tryrecipes.recipename}`}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <div className="flex items-center justify-start gap-5">
              <div className="left flex-1">
                <img
                  src={Tryrecipes.picture}
                  alt=""
                  className=" rounded-3xl w-full h-36 sm:h-40 object-cover"
                />
              </div>
              <div className="right flex-1 flex flex-col gap-4">
                <div className="righttop font-semibold text-lg sm:text-xl tracking-tighter">
                  {Tryrecipes.recipename}
                </div>
                <div className="rightbottom text-sm text-black/60 tracking-tight">
                  By <span className="ml-[.3px]">{Tryrecipes.authorName}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
export default Others;
