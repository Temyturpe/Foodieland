import React from "react";
import Chef from "../../assets/chefevery.png";
import "./about.css";

const About = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row gap-16">
      <div className=" left w-full md:w-[70%]">
        <div className="about">
          <div className="abouttitle text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            What is <span className="font-lobster">Foodieland</span> about?
          </div>
          <div className="abouttext text-lg  mt-4 flex flex-col gap-5">
            <div className="texts">
              <div className="subhead text-lg sm:text-xl mb-3 font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <p className="parg text-black/60 text-sm sm:text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate ducimus necessitatibus, illo beatae ipsam praesentium
                commodi nostrum aliquid delectus, ex dolorem deserunt maxime
                perferendis cumque. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quas placeat iusto distinctio quisquam. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Soluta enim
                assumenda porro esse sapiente repellendus corporis natus
                explicabo ab tempora?
              </p>
            </div>
            <div className="texts w-full mt-8">
              <div className="texts flex flex-col sm:flex-row justify-center items-center gap-4 ">
                <div className="left chef flex-1 h-[350px]">
                  <img
                    src={Chef}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="right flex-1">
                  <p className="parg text-black/60 text-sm sm:text-[16px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cupiditate ducimus necessitatibus, illo beatae ipsam
                    praesentium commodi nostrum aliquid delectus, ex dolorem
                    deserunt maxime perferendis cumque. maiores. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Dignissimos,
                    fugiat? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempore voluptatum eos eveniet vel suscipit quis,
                    eligendi nam, ipsam, totam voluptates fuga maiores
                    voluptatibus! In beatae sequi perferendis enim qui omnis
                    odio architecto, vel dignissimos, harum magni, nulla vitae
                    fugiat cum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="why mt-16">
          <div className="whybox ">
            <div className="title text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Our Objectives
            </div>
            <div className="objective">
              <div className="objective1 ">
                <div className="obj-title text-lg sm:text-xl my-3  font-semibold">
                  Lorem ipsum dolor sit.
                </div>
                <p className="obj-text text-black/60 text-sm sm:text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt vel dignissimos animi! Repellendus reiciendis id
                  aperiam veniam libero exercitationem voluptate.
                </p>
              </div>
              <div className="objective2 ">
                <div className="obj-title text-lg sm:text-xl my-3  font-semibold">
                  Lorem ipsum dolor sit.
                </div>
                <p className="obj-text text-black/60 text-sm sm:text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt vel dignissimos animi! Repellendus reiciendis id
                  aperiam veniam libero exercitationem voluptate. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptas alias,
                  ratione enim harum quasi similique eius quas eos explicabo
                  rem, et accusantium sunt.
                </p>
              </div>
              <div className="objective3 ">
                <div className="obj-title text-lg sm:text-xl my-3  font-semibold">
                  Lorem ipsum dolor sit.
                </div>
                <p className="obj-text text-black/60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt vel dignissimos animi! Repellendus reiciendis id
                  aperiam veniam libero exercitationem voluptate. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Sit facilis
                  recusandae eos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[30%] right testiside">
        <div className="testimonial ">
          <div className="testi-title border-black/10 pb-3 border-b-[.4px] text-2xl sm:text-3xl md:text-4xl flex  justify-center items-center  font-semibold">
            TESTIMONIALS
          </div>
          <div className="testimonials mt-8 flex flex-col gap-5 justify-center items-center ">
            <div className="test1 shadow-md px-4">
              <q className="italic text-black/60 text-sm sm:text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                eligendi officiis! Quas est, perferendis laudantium labore
                repellat itaque. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </q>
              <div className="name flex justify-end items-end mr-5 text-[#357355] mt-2">
                Julian Miller
              </div>
            </div>
            <div className="test2 shadow-md px-4 ">
              <q className="italic text-black/60 text-sm sm:text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                eligendi officiis! Quas est, perferendis laudantium labore
                repellat itaque. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </q>
              <div className="name flex justify-end items-end mr-5 text-[#357355] mt-2">
                Anthony Specter
              </div>
            </div>
            <div className="test3 shadow-md px-4">
              <q className="italic text-black/60 text-sm sm:text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                eligendi officiis! Quas est, perferendis laudantium labore
                repellat itaque. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </q>
              <div className="name flex justify-end items-end mr-5 text-[#357355] mt-2">
                Lillian Brown
              </div>
            </div>
            <div className="test4 shadow-md px-4 ">
              <q className="italic text-black/60 text-sm sm:text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                eligendi officiis! Quas est, perferendis laudantium labore
                repellat itaque. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </q>
              <div className="name flex justify-end items-end mr-5 text-[#357355] mt-2">
                Simon Mark
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
