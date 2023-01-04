import React from "react";
import Contactchef from "../../assets/contact.png";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contactbox flex justify-start items-start gap-8 mt-12">
        <div className="left md:flex hidden w-[30%] chefbg rounded-xl justify-center items-center ">
          <img
            src={Contactchef}
            alt=""
            className="w-[90%] flex justify-center items-center "
          />
        </div>
        <div className="right w-full md:w-[70%]">
          <form action="">
            <div className="formbox  text-black/60">
              <div className="top flex flex-col sm:flex-row gap-7 sm:gap-12 ">
                <div className="name flex flex-col gap-3 flex-1">
                  <label htmlFor="name" className="text-sm">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="outline-none text-sm  border-black/10 border p-3 rounded-xl"
                  />
                </div>
                <div className="name flex flex-col gap-3 flex-1">
                  <label htmlFor="email" className="text-sm">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address..."
                    className="outline-none text-sm  border-black/10 border p-3 rounded-xl"
                  />
                </div>
              </div>
              <div className="middle mt-6 flex flex-col sm:flex-row gap-7 sm:gap-12  ">
                <div className="name flex flex-col gap-3 flex-1">
                  <label htmlFor="name" className="text-sm">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject..."
                    className="outline-none text-sm  border-black/10 border p-3 rounded-xl"
                  />
                </div>

                <div className="name flex flex-col gap-3 flex-1">
                  <label for="topic" className="text-sm">
                    ENQUIRY TYPE
                  </label>

                  <select
                    name="cars"
                    className="outline-none text-sm  border-black/10 border p-3 rounded-xl bg-white"
                  >
                    <option value="volvo">Advertising</option>
                    <option value="saab">Culnary School</option>
                    <option value="opel">Recipe</option>
                    <option value="audi">Consultaion</option>
                  </select>
                </div>
              </div>
              <div className="message  mt-6 flex flex-col gap-3 flex-1">
                <label for="topic" className="text-sm">
                  MESSAGES
                </label>

                <textarea
                  name="message"
                  placeholder="Enter your messages..."
                  cols="30"
                  rows="10"
                  className="outline-none border-black/10 border  p-3 rounded-xl text-sm "
                ></textarea>
              </div>
            </div>
            <button className="py-3 px-8 bg-black rounded-lg mt-6 text-white shadow-sm ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
