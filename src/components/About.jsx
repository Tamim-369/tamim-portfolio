import React from "react";
import { Element } from "react-scroll";
import "../styles/styles.css";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import react from "../assets/react.png";
import { TbWorldWww } from "react-icons/tb";
const About = () => {
  return (
    <Element name="about">
      <div className="border-b-2 border-purple-400 mb-2">
        <div
          id="about"
          className="about w-11/12 md:w-[70%] pt-5 pb-10 mx-auto h-[115vh]   flex flex-col md:flex-row justify-center item-center"
        >
          <div className="text-content h-1/2 md:self-center text-white mx-auto w-8/12">
            <span className="text-sm text-slate-400">INTRODUCTION</span>
            <h1 className="font-sans font-bold text-3xl md:text-5xl mb-1">
              Overview.
            </h1>
            <p className="text-secondary">
              I'm a skilled software developer with experience in JavaScript,
              and expertise in frameworks like React, Nodejs, and Express. I
              also have experience working with python . I'm a quick learner and
              collaborate closely with clients to create modern, efficient,
              scalable, and user-friendly solutions that solve real-world
              problems. I will help you to bring your ideas to life!
            </p>
          </div>
          <div className="cards w-8/12 hidden md:mb-6 sm:2/12  md:w-[5rem] mx-auto sm:flex flex-row md:flex-col justify-center items-center mt-4">
            <div className="card w-[50%] sm:w-1/2  md:h-full md:w-full  p-4 m-3 text-slate-50  flex flex-col justify-center items-center ">
              <div className="card-img text-white">
                <img src={mongodb} alt="" srcset="" className=" h-full " />
              </div>
            </div>
            <div className="card w-[50%] sm:w-1/2  md:h-full md:w-full  p-4 m-3 text-slate-50  flex flex-col justify-center items-center ">
              <div className="card-img text-white">
                <img src={express} alt="" srcset="" className=" h-full " />
              </div>
            </div>
            <div className="card w-[50%] sm:w-1/2  md:h-full md:w-full  p-4 m-3 text-slate-50  flex flex-col justify-center items-center ">
              <div className="card-img text-white">
                <img src={react} alt="" srcset="" className=" h-full " />
              </div>
            </div>
            <div className="card w-[50%] sm:w-1/2  md:h-full md:w-full p-4 m-3 text-slate-50  flex flex-col justify-center items-center ">
              <div className="card-img text-white">
                <img src={node} alt="" srcset="" className=" h-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
