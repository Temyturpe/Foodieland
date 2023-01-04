import React from "react";
import { useParams } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import Othermay from "../components/Others/Othermay";
import Subscribe from "../components/Subscribe/Subscribe";

const BlogDetails = ({ blog }) => {
  const { blogtite } = useParams();
  return (
    <div className="detail">
      {blog
        .filter((item) => item.blogtite === blogtite)
        .map((item, index) => (
          <div className="detail" key={index}>
            <div className="detailsheader">
              <div className="title text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight flex justify-center items-center">
                {item.blogtite}
              </div>
              <div className="authordate flex justify-center items-center mt-8 md:mt-12">
                <div className="authordatebox flex justify-center gap-8 items-center">
                  <div className="author border-r-[.4px] border-black/10 pr-8 flex items-center gap-4">
                    <img src={item.authorpic} alt="" />
                    <span className="font-semibold  tracking-tight">
                      {item.authorname}
                    </span>
                  </div>
                  <div className="date text-sm text-black/60 tracking-tight">
                    {item.date}
                  </div>
                </div>
              </div>
              <div className="summery tracking-tight text-black/60 px-0 sm:px-12 md:px-32 flex text-sm sm:text-md justify-center items-center  text-center mt-8">
                {item.blogsummery}
              </div>
              <div className="image mt-8 bg-blue-200 rounded-3xl">
                <img
                  src={item.blogpic}
                  alt=""
                  className="  w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover rounded-3xl "
                />
              </div>
            </div>
            <div className="details flex flex-col sm:flex-row gap-5 mt-10 sm:px-8 md:px-20">
              <div className="mainside w-full sm:w-[80%]">
                <div className="mainmain">
                  <div className="">
                    {item.deteils.map((deteils) => (
                      <div key={deteils.id} className=" mb-10 md:mb-16 ">
                        <div className="name text-lg md:text-xl font-semibold tracking-tight">
                          {deteils.title}
                        </div>
                        <div className="text text-black/60 tracking-tight mt-4">
                          {deteils.texts}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="shareside w-full sm:w-[20%] ">
                <div className="titleside text-sm font-semibold text-center justify-center items-center">
                  SHARE THIS ON:
                </div>
                <div className="socials flex sm:flex-col justify-center items-center gap-8 mt-5 text-lg">
                  <GrFacebookOption />
                  <BsTwitter />
                  <BsInstagram />
                </div>
              </div>
            </div>
            <Subscribe />
            <div className="maylike mt-32">
              <div className="title text-4xl font-semibold tracking-tight text-center flex justify-center items-center">
                Check out the delicious recipe
              </div>
              <div className="otherrecipes mt-20">
                <Othermay />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogDetails;
