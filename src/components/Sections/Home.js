import React, { useState } from "react";
import { useInterval } from "react-use";
import { ScrollElement } from "react-scroll";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrSoundcloud } from "react-icons/gr";

const textArray = ["Web Designer", "ML Technician", "Music Producer"];

const Home = () => {
  const [textIdx, setTextIdx] = useState(0);

  useInterval(() => {
    if (textIdx === textArray.length - 1) {
      setTextIdx(0);
    } else {
      setTextIdx(textIdx + 1);
    }
  }, 2000);

  return (
    <section
      className="hero z-[100] hero-bg bg-fixed bg-cover"
      id="section-home"
    >
      <div className="container mx-auto ">
        <div className="flex sm:flex-row flex-col flex-wrap items-center ">
          <div className="basis-2/4 m-auto">
            <div class="hero-image sm:w-auto w-[60%] mx-auto">
              <img
                className="mx-auto"
                src="/Content/images/Developer-512px-3.gif"
                alt="Hero Image"
              />
            </div>
          </div>
          <div className="basis-2/4 z-[1] m-auto">
            <div className="hero-content">
              <div className="hero-text">
                <p>Hi, I'm</p>
                <h1>Nhật Minh</h1>
                <h1 className="animated-item text-yellow-500">
                  {textArray[textIdx]}
                </h1>
              </div>
              <div className="hero-btn flex w-[100%]">
                <a
                  className="home-icon ml-0 hover:bg-blue-700"
                  href="https://www.facebook.com/minh.duong.16568"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size="24" />
                </a>
                <a
                  className="home-icon hover:bg-orange-600"
                  href="https://soundcloud.com/minhno"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrSoundcloud size="28" />
                </a>

                <a
                  className="home-icon hover:text-white hover:bg-blue-700"
                  href="https://www.linkedin.com/in/nhatminh9897/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size="28" />
                </a>
                <a
                  className="home-icon hover:text-white hover:bg-black"
                  href="https://github.com/Minh9897"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size="28" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollElement(Home);
