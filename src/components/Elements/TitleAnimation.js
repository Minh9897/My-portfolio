import React, { useContext } from "react";
import { ScrollContainerContext } from "react-scroll-motion";
import Pagetitle from "./PageTitle";

const titles = ["About Me", "My Skills", "Experiences", "My Projects"];

function TitleAnimation() {
  const scrollContext = useContext(ScrollContainerContext);

  return (
    <div
      className="absolute z-[200] w-[500%] flex "
      style={{
        top: `${scrollContext.currentY}px`,
        left: `calc(-100% * ${
          scrollContext.currentProgress + scrollContext.currentPage
        })`,
      }}
    >
      <div className="bg-sky-700 w-[100%] opacity-0"></div>
      <div
        className="bg-sky-700 bg-opacity-30 w-[100%] flex items-center justify-center"
        style={{ opacity: scrollContext.currentPage < 1 ? "0" : "1" }}
      >
        <Pagetitle title={titles[0]} />
      </div>
      <div className="bg-sky-700 bg-opacity-30 w-[100%] flex items-center justify-center">
        <Pagetitle title={titles[1]} />
      </div>
      <div className="bg-sky-700 bg-opacity-30 w-[100%] flex items-center justify-center">
        <Pagetitle title={titles[2]} />
      </div>
      <div className="bg-sky-700 bg-opacity-30 w-[100%] flex items-center justify-center">
        <Pagetitle title={titles[3]} />
      </div>
    </div>
  );
}

export default TitleAnimation;
