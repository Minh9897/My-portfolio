import classNames from "classnames";
import MouseSpeed from "mouse-speed";
import { useCallback, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiReact,
  SiFlask,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";
import SkillIcon from "../Elements/SkillIcon";

import Pagetitle from "../Elements/PageTitle";

var speed = new MouseSpeed();
function Skills(props) {
  const [speedX, setSpeedX] = useState(1);
  var onCalcSpeed = useCallback(function () {
    setSpeedX(speed.speedX);
  }, []);
  return (
    <section
      className={classNames("skills bg-fixed bg-cover", props.styleProps)}
      style={{
        backgroundImage: `linear-gradient(
          to bottom right,
          rgb(8 145 178 / 15%),
          rgb(30 64 175 / 35%) 85%,
          rgb(30 64 175 / 50%)
        ),
        url(/Content/images/bg2.png)`,
      }}
      id="section-skills"
    >
      <div className="opacity-0 md:hidden">
        <Pagetitle title={"Skill"} />
      </div>
      <div
        className="relative md:w-[100%] md:bg-none
        flex md:flex-col overflow-auto rounded-[16px]
        md:h-auto my-auto md:mt-[max(147px,calc(50vh-174px))]"
        style={{
          width: `min(60vw,296px)`,
          height: `min(584px,69vh)`,
          background: `linear-gradient(
            134deg,
            rgb(96, 161, 235, 0.7) 0%,
            rgb(36, 130, 218, 0.7) 35%,
            rgba(84, 123, 231, 0.7) 50%,
            rgba(101, 103, 224, 0.7) 65%,
            rgb(96, 98, 235, 0.7) 100%
  )`,
        }}
        onMouseEnter={() => {
          speed.init(onCalcSpeed);
        }}
        onMouseLeave={() => {
          speed.destroy(function () {});
        }}
      >
        <ul className="skills-ul py-[4px] pl-[4px] md:p-0 h-[584px] md:h-auto">
          <SkillIcon
            className="rounded-bl-[16px] md:bg-red-600 text-red-600 "
            speedX={speedX}
            text={"HTML 5"}
            icon={<SiHtml5 size="46" />}
          />
          <SkillIcon
            className="md:bg-blue-600 text-blue-600"
            speedX={speedX}
            text={"CSS 3"}
            icon={<SiCss3 size="46" />}
          />
          <SkillIcon
            className="md:bg-yellow-400 text-yellow-400"
            speedX={speedX}
            text={"JavaScript"}
            icon={<SiJavascript size="46" />}
          />
          <SkillIcon
            className="md:bg-pink-500 text-pink-500"
            speedX={speedX}
            text={"Sass"}
            icon={<SiSass size="46" />}
          />
          <SkillIcon
            className="md:bg-blue-400 text-blue-400"
            speedX={speedX}
            text={"Tailwind CSS"}
            icon={<SiTailwindcss size="46" />}
          />
          <SkillIcon
            className="md:bg-sky-600 text-sky-600 rounded-br-[16px]"
            speedX={speedX}
            text={"React"}
            icon={<SiReact size="46" />}
          />
        </ul>
        <ul className="skills-ul py-[4px] md:p-0">
          <SkillIcon
            className="rounded-bl-[16px]"
            python={true}
            speedX={speedX}
            text={"Python"}
            icon={
              <object
                className="pointer-events-none"
                data="/Content/images/python.svg"
                width="46"
                height="46"
              />
            }
          />
          <SkillIcon
            className="md:bg-black"
            speedX={speedX}
            text={"Flask"}
            icon={<SiFlask size="46" />}
          />
          <SkillIcon
            className="md:bg-green-900 text-green-900"
            speedX={speedX}
            text={"Django"}
            icon={<SiDjango size="46" />}
          />
          <SkillIcon
            className="md:bg-orange-500 text-orange-500"
            speedX={speedX}
            text={"Tensorflow"}
            icon={<SiTensorflow size="46" />}
          />
          <SkillIcon
            className="md:bg-orange-600 text-orange-600 rounded-br-[16px]"
            speedX={speedX}
            text={"Pytorch"}
            icon={<SiPytorch size="46" />}
          />
        </ul>
        <ul className="skills-ul py-[4px] pr-[4px] md:p-0">
          <SkillIcon
            className="rounded-bl-[16px] md:bg-sky-400 text-sky-400"
            speedX={speedX}
            text={"VS Code"}
            icon={<SiVisualstudiocode size="46" />}
          />
          <SkillIcon
            className="md:bg-black"
            speedX={speedX}
            text={"Github"}
            icon={<SiGithub size="46" />}
          />
          <SkillIcon
            className="md:bg-[#F6BE00] text-[#F6BE00]"
            speedX={speedX}
            text={"Firebase"}
            icon={
              <object
                className="pointer-events-none"
                data="/Content/images/firebase.svg"
                width="46"
                height="46"
              />
            }
          />
          <SkillIcon
            className="md:bg-orange-500 text-orange-500 rounded-br-[16px]"
            speedX={speedX}
            text={"Jupyter"}
            icon={
              <object
                className="pointer-events-none"
                data="/Content/images/Jupyter.svg"
                width="46"
                height="46"
              />
            }
          />
        </ul>
      </div>
    </section>
  );
}

export default Skills;
