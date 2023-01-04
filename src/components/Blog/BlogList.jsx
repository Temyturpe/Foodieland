import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blog }) => {
  return (
    <div className="bloglist">
      <>
        {blog.map((item, index) => (
          <div
            className="w-full mb-10 shadow-sm sm:shadow-none p-2"
            key={index}
          >
            <Link to={`/blogdetails/${item.blogtite}`}>
              <div className="list flex flex-col sm:flex-row gap-6 items-center">
                <div className="left w-full sm:w-[40%] bg-blue-200 rounded-3xl">
                  <img
                    src={item.blogpic}
                    alt=""
                    className="w-full h-48 rounded-3xl object-cover"
                  />
                </div>
                <div className="right w-full sm:w-[60%] flex flex-col gap-6 md:gap-10 justify-start">
                  <div className="righttop">
                    <div className="title text-[23px] font-semibold tracking-tight">
                      {item.blogtite}
                    </div>
                    <div className="subtitle tracking-tight text-black/60">
                      {item.blogsummery}
                    </div>
                  </div>
                  <div className="rightbottom flex justify-start items-center gap-4 md:gap-8">
                    <div className="bottomleft flex items-center justify-start gap-3 border-r-[.4px] border-black/10 pr-6 md:pr-8">
                      <img src={item.authorpic} alt="" />
                      <span className="font-semibold">{item.authorname}</span>
                    </div>
                    <div className="bottomright text-sm text-black/60 tracking-tight">
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </>
    </div>
  );
};

export default BlogList;
