import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import createScrollSnap from "scroll-snap";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Events } from "react-scroll";

import SideBar from "./components/Elements/SideBar";
import BackToTop from "./components/Elements/BackToTop";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Experiences from "./components/Sections/Experiences";
import Projects from "./components/Sections/Projects";
import TitleAnimation from "./components/Elements/TitleAnimation";

const baseConfig = {
  timeout: 100,
  duration: 600,
  threshold: 0.05,
  delay: 10,
  // easing: (t) => Math.sin((t * Math.PI) / 2),
  easing: (t) => t,
};

function App() {
  const [scrollContainer, setScrollContainer] = useState(window);
  const snapContainerRef = useRef();
  const bindScrollSnap = useCallback(() => {
    const element = snapContainerRef.current;

    const { bind, unbind } = createScrollSnap(element, {
      snapDestinationY: "100%",
      ...baseConfig,
    });

    return { bind: bind, unbind: unbind };
  }, [snapContainerRef]);

  useEffect(() => {
    const { bind, unbind } = bindScrollSnap();
    Events.scrollEvent.register("begin", function () {
      unbind();
    });
    Events.scrollEvent.register("end", function () {
      bind();
    });
    setScrollContainer(snapContainerRef.current);
  }, [snapContainerRef, bindScrollSnap]);

  return (
    <>
      <SideBar />
      <div
        className="channel-bar z-0"
        ref={snapContainerRef}
        id="snapContainer"
      >
        <ScrollContainer scrollParent={scrollContainer}>
          <TitleAnimation />
          <ScrollPage page={0}>
            <Home />
          </ScrollPage>
          <ScrollPage page={1}>
            <About styleProps="z-[99]" name="section-about" />
          </ScrollPage>
          <ScrollPage page={2}>
            <Skills styleProps="z-[98]" name="section-skills" />
          </ScrollPage>
          <ScrollPage page={3}>
            <Experiences styleProps="z-[97]" name="section-experience" />
          </ScrollPage>
          <ScrollPage page={4}>
            <Projects styleProps="z-[96]" name="section-projects" />
          </ScrollPage>
        </ScrollContainer>
      </div>

      <BackToTop />
    </>
  );
}

export default App;
