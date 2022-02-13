import classNames from "classnames";
import { Carousel } from "react-responsive-carousel";
import PageTitle from "../Elements/PageTitle";

function Projects(props) {
  return (
    <section
      className={classNames("projects bg-fixed bg-cover", props.styleProps)}
      style={{
        backgroundImage: `linear-gradient(
            to bottom right,
            rgb(8 145 178 / 15%),
            rgb(30 64 175 / 35%) 85%,
            rgb(30 64 175 / 50%)
          ),
          url(/Content/images/bg2.png)`,
      }}
      id="section-projects"
    >
      <div className="opacity-0">
        <PageTitle title="My Projects" />
      </div>
      <div
        className="mt-2 relative md:text-[1.7rem] lg:text-[1.1rem] text-[3vw]"
        style={{ width: "min(70vh,calc(90vw - 64px))" }}
      >
        <Carousel infiniteLoop={true} emulateTouch={true} dynamicHeight={true}>
          <div>
            <img alt="" src="/Content/images/project1.png" />
            <div className="legend">
              <h2>Analyzing X-ray Spectroscopy Using Python</h2>
              <div className="float-right mr-8">
                <a
                  href="https://drive.google.com/file/d/1_c8BIa-fSSuQMxIXWPO_j69zRTMgntsI"
                  className="hover:text-orange-600 hover:cursor-pointer underline text-right"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Paper
                </a>
                <br />
                <a
                  href="https://github.com/Minh9897/X-ray-Spectroscopy"
                  className="hover:text-orange-600 hover:cursor-pointer underline text-right"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div>
            <img alt="" src="/Content/images/project2.jpg" />
            <div className="legend">
              <h2>Building Face Recognition For Attendance System</h2>
              <div className="float-right mr-8">
                <a
                  href="https://drive.google.com/file/d/1WrWXXCxeyn6l6ju8tATPjtdumiPck_hm/view?usp=sharing"
                  className="hover:text-orange-600 hover:cursor-pointer underline text-right"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Paper
                </a>
                <br />
                <a
                  href="https://github.com/Minh9897/Face-Recognition-In-Attendance-System"
                  className="hover:text-orange-600 hover:cursor-pointer underline text-right"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div>
            <img alt="" src="/Content/images/project3.png" />
            <div className="legend">
              <h2>My Portfolio Website</h2>
              <div className="float-right mr-8">
                <a
                  href="https://github.com/Minh9897/My-react-portfolio"
                  className="hover:text-orange-600 hover:cursor-pointer underline text-right"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
