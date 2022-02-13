import { BsStack } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { GiLion } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { GiStarsStack } from "react-icons/gi";
import { Link } from "react-scroll";

const SideBar = () => {
  return (
    <nav
      className="fixed top-0 left-0 h-screen w-[64px]
                  bg-white dark:bg-gray-900 shadow-lg z-[1]"
    >
      <SideBarIcon
        icon={<GiLion size="30" />}
        hidden={true}
        section={"section-home"}
        active={"active"}
        spy={true}
      />
      <Divider />
      <SideBarIcon
        icon={<RiContactsFill size="22" />}
        text={"About Me ✨"}
        active={"active"}
        section={"section-about"}
        spy={true}
      />
      <SideBarIcon
        icon={<GiStarsStack size="26" />}
        text={"Skills"}
        active={"active"}
        section={"section-skills"}
        spy={true}
      />
      <SideBarIcon
        icon={<FaGraduationCap size="24" />}
        text={"Experiences"}
        active={"active"}
        section={"section-experience"}
        spy={true}
      />
      <SideBarIcon
        icon={<BsStack size="22" />}
        text={"Projects"}
        active={"active"}
        section={"section-projects"}
        spy={true}
      />
    </nav>
  );
};

const SideBarIcon = ({ icon, text, hidden, active, section, spy }) => (
  <Link
    activeClass={active}
    to={section}
    smooth={"easeInOutQuart"}
    duration={1500}
    spy={spy}
    containerId="snapContainer"
  >
    <div className="sidebar-icon group">
      {icon}
      {!hidden && (
        <div className="sidebar-tooltip group-hover:scale-100 text-sm triangle-left ">
          <span className="sidebar-span">{text}</span>
        </div>
      )}
    </div>
  </Link>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
