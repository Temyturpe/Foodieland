import React from "react";
import Blogheader from "../components/Blog/Blogheader";
import BlogList from "../components/Blog/BlogList";
import Subscribe from "../components/Subscribe/Subscribe";
import Otherads from "../components/Others/Otherads";

const Blogs = ({ blog }) => {
  return (
    <div>
      <Blogheader />
      <div className="flex flex-col md:flex-row gap-10 mt-16">
        <div className="left w-full md:w-[65%]">
          <div className="blog">
            <BlogList blog={blog} />
          </div>
        </div>
        <div className="right w-full md:w-[35%]">
          <div className="othersbox w-full">
            <div className="title text-2xl sm:text-4xl font-semibold mb-8">
              Tasty Recipes
            </div>
            <Otherads />
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Blogs;
