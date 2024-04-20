import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import "../styles/styles.css";
import { GrLocation, GrSend } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaMailchimp,
  FaPaperPlane,
  FaPhone,
  FaVoicemail,
} from "react-icons/fa6";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [display, setDispay] = useState("block");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = emailjs
      .sendForm("service_ty8if3j", "template_y6mvdit", form.current, {
        publicKey: "pl7sgjmO62J6JXzsy",
      })
      .then((result) => {
        console.log(result.text);

        alert("Message sent successfully");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {/* inspired by tw elements */}
      <Element name="contact"></Element>
      <div className="w-11/12 sm:w-9/12   form-bg container my-24  mx-auto px-5 md:px-10 rounded-xl text-white py-12 md:py-24">
        <section className="">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 className="mb-6 text-3xl font-bold">Contact us</h2>

              <p className="mb-6 text-neutral-200 dark:text-neutral-300">
                If you have any questions, please do not hesitate to contact me.
                I will try my best to get back to you as soon as possible.
              </p>

              <p className="mb-3 flex flex-wrap justify-left items-left text-neutral-200 dark:text-neutral-300">
                <FaLocationDot className="text-xl" />{" "}
                <span className="ml-1 ">Dhaka, Bangladesh</span>
              </p>
              <p className="mb-3 flex flex-wrap justify-left items-left text-neutral-200 dark:text-neutral-300">
                <FaPhone className="text-xl" />{" "}
                <span className="ml-1 ">+880183808733</span>
              </p>
              <p className="mb-3 flex flex-wrap justify-left items-left text-neutral-200 dark:text-neutral-300">
                <IoMdMail className="text-xl" />{" "}
                <span className="ml-1 ">+880183808733</span>
              </p>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="z-1 peer block min-h-[auto] w-full rounded border-0 card-bg p-3  leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90"
                    onChange={handleChange}
                    name="from_name"
                    placeholder="Name"
                  />
                  <label
                    className={` ointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.4] text-neutral-200 transition-all duration-200 ease-in peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[1rem] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                      formData.from_name ? "active" : "" // Check if input is filled
                    }`}
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-0 card-bg p-3  leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput91"
                    placeholder="Email address"
                    onChange={handleChange}
                    name="form_email"
                  />
                  <label
                    className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.4] text-neutral-200 transition-all duration-200 ease-in peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-primary ${
                      formData.form_email ? "active" : ""
                    }`}
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-0 card-bg p-4  leading-[2.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                    name="message"
                    onChange={handleChange}
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className={`
                    }ointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.4] text-neutral-200 transition-all duration-200 ease-in peer-focus:-translate-y-[1.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[1rem] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                      formData.message ? "active" : "" // Check if input is filled
                    }`}
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="mx-auto flex justify-center items-center gap-2 bg-indigo-950 rounded-md p-3"
                >
                  <div className="icon text-md font-bold">
                    <FaPaperPlane />
                  </div>
                  <span className="font-semibold mt-1">Send</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
