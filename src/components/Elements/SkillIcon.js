import { useState, useRef, useEffect, useCallback } from "react";
import { Transition } from "react-transition-group";
import classNames from "classnames";

function SkillIcon(props) {
  const [hover, setHover] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [flip, setFlip] = useState(false);
  const [rotateY, setRotateY] = useState(0);
  const [showText, setShowText] = useState(false);
  const [height, setHeight] = useState(window.innerWidth);
  const iconRef = useRef();

  const getWindowHeight = useCallback(() => {
    setHeight(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getWindowHeight);
  }, [getWindowHeight]);

  function rotateHandler() {
    const style = window.getComputedStyle(iconRef.current);
    const matrix = style.transform;

    // Can either be 2d or 3d transform
    const matrixType = matrix.includes("3d") ? "3d" : "2d";

    if (matrixType === "3d") {
      const values = matrix.split("(")[1].split(")")[0].split(","),
        pi = Math.PI,
        sinB = parseFloat(values[0]),
        rotateY = Math.round((Math.acos(sinB) * 180) / pi);
      setRotateY(rotateY);
    }
  }

  return (
    <div
      className={classNames(props.className, "item-skill")}
      onMouseEnter={() => {
        if (height > 767) {
          setHover(true);
        } else {
          setHover(false);
        }
      }}
      onMouseLeave={() => setHover(false)}
      onClick={() => setShowText(!showText)}
      style={{
        background: props.python
          ? height > 767
            ? "linear-gradient(140deg, rgb(56,126,184) 50%, rgb(255,224,82) 50%)"
            : ""
          : "",
      }}
    >
      <Transition
        in={hover}
        timeout={3000}
        onEnter={() => {
          rotateHandler();
          setFlip(false);
        }}
        onExit={() => {
          setFlip(true);
          setSpeed(Math.abs(props.speedX));
        }}
        onExited={() => {
          setRotateY(0);
          setFlip(false);
        }}
      >
        <div
          className="icon-skill group"
          ref={iconRef}
          style={{
            transform: flip
              ? `rotatey(${360 * Math.round(speed / 10 + 1)}deg)`
              : `rotatey(${rotateY}deg)`,
            transition: flip ? "transform 3s ease-out" : "all 0s",
          }}
        >
          {showText && height < 768 && (
            <div className="opacity-0">{props.icon}</div>
          )}
          {!showText && height < 768 && props.icon}
          {height > 767 && props.icon}
          {showText && (
            <div className="absolute group-hover:scale-100 text-[15px] rotate-0 md:hidden">
              <span className="bg-white">{props.text}</span>
            </div>
          )}
          <span className="hidden md:block text-[16px]">{props.text}</span>
        </div>
      </Transition>
    </div>
  );
}

export default SkillIcon;
