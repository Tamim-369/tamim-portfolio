import React, { useState } from "react";
import { Element } from "react-scroll";
import "../styles/projects.css";
import { projects } from "../siteData";
import github from "../assets/github.png";
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  return (
    <>
      <Element name="projects"></Element>

      <div
        id="projects"
        className="border-b-2 border-purple-400 mb-2 projects mx-auto mt-20 w-full flex flex-col justify-center items-center sm:px-16 md:px-10"
      >
        <div className="text-center  text-2xl flex justify-start items-start flex-col text-neutral-50 font-bold font-sans  ">
          <div className="project-overview w-10/12 ml-5 md:ml-10 text-left md:w-6/12 gap-8">
            <span className="text-xl font-light-custom ml-1  text-secondary">
              MY WORK
            </span>
            <h1 className="font-sans mt-4font-bold text-3xl md:text-6xl mb-1">
              Projects.
            </h1>
            <p className="text-secondary font-sans text-xl mt-5 font-medium ">
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
          </div>

          <div className="projects-section mt-10 sm:ml-2  w-full flex flex-col justify-center items-center mx-auto">
            <div className="  mt-5 content-center place-items-center grid  md:w-full md:grid-cols-2 lg:grid-cols-3 contrast-150">
              {projects.map((item) => (
                <div
                  key={item.id}
                  className="project-card gap-4 w-11/12 md:w-10/12 mb-10 p-4"
                >
                  <div className="image">
                    <img
                      className={`project-image w-full h-full project-card-img `}
                      src={item.image}
                      alt=""
                    />
                  </div>

                  <div className="project-text flex flex-col justify-center items-start w-full">
                    <div className="flex justify-between pr-2 mb-2 w-full items-center">
                      <div className="title flex ">
                        <span className="font-semibold ">{item.title}</span>
                      </div>
                      <div className="links flex gap-2  ">
                        <a
                          href={item.url}
                          target="_blank"
                          className=" w-8 h-8 rounded-full    bg-purple-950 mt-1 border-2 border-purple-950"
                        >
                          <div className="link-icons text-sm flex justify-center items-center text-center flex-col pt-[7px]">
                            <FaExternalLinkAlt />
                          </div>
                        </a>
                        <a
                          href={item.github}
                          target="_blank"
                          className=" w-8 h-8 rounded-full   border-purple-950 border-2 flex justify-center items-center bg-purple-950 mt-1  "
                        >
                          <img className=" w-5/6 " src={github} alt="" />
                        </a>
                      </div>
                    </div>
                    <span className="text-secondary text-sm font-normal">
                      {item.description}
                    </span>
                  </div>
                  <div className="flex flex-wrap ml-0 text-left  justify-start">
                    {item.stack.map((tech) => (
                      <span className="stack text-sm font-light-custom ml-2 ">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
