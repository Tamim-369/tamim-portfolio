import picture from "/Programming.svg";
import { TypeAnimation } from "react-type-animation";
import "../styles/Hero.css";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <Element>
      <div className="hero  p-10 w-full flex  justify-center items-center md:flex-row  mx-auto h-[101vh] bg-top-bottom  border-b-2 items bg-no-repeat  border-purple-400">
        {/* style={{ backgroundImage: `url('/bg.png')` }} */}
        <div className="hero-section  flex flex-wrap  justify-center items-center mx-auto mb-32 md:w-10/12 ">
          <div className="hero-content   text-center md:text-left absolute w-11/12 md:w-6/12 md:mr-72  mt-20 text-3xl text-slate-200 ">
            <h1 className="font-sans font-semibold mb-1">
              Hi I'm &nbsp;
              <span className="hero-name font-bold font-mono text-4xl text-purple-400  ">
                Asiqur Rahman
              </span>
            </h1>
            <span className="text-2xl font-semibold mb-2">
              I am a passionate{" "}
              <span className="text-purple-400  text-3xl font-bold">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Web Developer",
                    1000,
                    "Javascript Developer",
                    1000,
                    "Designer",
                    1000,
                    "Programmer",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </span>
            <p className="text-slate-200 font-semibold mb-2 text-xl font-mono mt-2">
              I can build full stack web application with modern Features and
              Design
            </p>
            <div className="btn-group mt-1  justify-center flex md:block md:justify-left  md:w-full  ">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="border-2 hero-btn bg-purple-800 border-purple-400 border-none m-1 mr-2 hire  font-sans p-[0.5rem] px-[0.7rem]  rounded-xl"
              >
                Hire me
              </Link>
              <Link
                to="projects"
                className="border-2  hero-btn bg-purple-800 border-purple-400 border-none m-1 ml-2 projects  font-mono p-[0.5rem] px-[0.7rem]  rounded-xl"
                spy={true}
                smooth={true}
                duration={500}
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className=" flex-1   ">
            <img
              className="mt-20 hidden md:block float-end hero-img h-80 w-80"
              src={picture}
              alt=""
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
