import classNames from "classnames";
import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  StickyIn,
  Animator,
  MoveOut,
  MoveIn,
  batch,
  StickyOut,
} from "react-scroll-motion";

import ReactCardFlip from "react-card-flip";
import PageTitle from "../Elements/PageTitle";
import Detail from "../Elements/Detail";

const About = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipRef = useRef();

  const sizeHandler = useCallback(() => {
    setIsFlipped(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", sizeHandler);
  }, [sizeHandler]);

  return (
    <section
      className={classNames("about bg-fixed bg-cover", props.styleProps)}
      style={{
        backgroundImage: `linear-gradient(
          to bottom right,
          rgb(8 145 178 / 15%),
          rgb(30 64 175 / 35%) 85%,
          rgb(30 64 175 / 50%)
        ),
        url(/Content/images/bg2.png)`,
      }}
      id="section-about"
    >
      <Animator
        animation={batch(StickyOut(), MoveOut(-1000, 0))}
        className={{
          in: "z-[5] relative w-[100%] flex justify-center bg-sky-800 bg-opacity-50",
          out: "z-[5] relative w-[100%] opacity-0",
        }}
      >
        <PageTitle title="About Me" />
      </Animator>

      <Animator
        className={{
          in: "pointer-events-none relative my-auto",
          out: "relative my-auto",
        }}
      >
        <div
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <ReactCardFlip isFlipped={isFlipped} containerClassName="text-center">
            <div
              ref={flipRef}
              onClick={(e) => {
                e.preventDefault();
                setIsFlipped(true);
              }}
            >
              <Animator className={{ in: "grayscale" }}>
                <img
                  style={{
                    width: "min((50vh),calc(80vw - 16px))",
                    height: "min((62.5vh),calc((80vw - 16px)/0.8)",
                  }}
                  className="object-cover rounded-[12px]"
                  src="/Content/images/about.jpg"
                  alt="About Image"
                />
              </Animator>
              <Animator
                animation={StickyIn(0, "50%")}
                className="left-[50%] -translate-x-[50%] -translate-y-[50%] -z-[1] w-[min((50vh),calc(80vw-16px))]"
              >
                <Animator animation={MoveIn(-1000, 0)}>
                  <img
                    style={{ width: "100%" }}
                    className="mx-auto"
                    src="/Content/images/ghost.gif"
                    alt="Ghost"
                  />
                </Animator>
              </Animator>
            </div>

            <div
              className="detail relative rounded-[12px]"
              style={{
                height: `${
                  flipRef.current ? flipRef.current.clientHeight : 0
                }px`,
                width: `${flipRef.current ? flipRef.current.clientWidth : 0}px`,
              }}
              onClick={(e) => {
                e.preventDefault();
                setIsFlipped(false);
              }}
            >
              <div className="h-[90%] relative overflow-hidden flex justify-center">
                <Animator animation={StickyOut()}>
                  <Detail />
                </Animator>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </Animator>
    </section>
  );
};

export default About;
