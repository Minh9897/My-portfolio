import classNames from "classnames";
import Timeline from "../Elements/Timeline";
import ModalElement from "../Elements/ModalElement";
import LoginTable from "../Table/LoginTable";
import { TableProvider } from "../Table/table-context";
import ScoreTable from "../Table/ScoreTable";
import { useState } from "react";

function Experiences(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <TableProvider>
      <section
        className={classNames("experience bg-fixed bg-cover", props.styleProps)}
        style={{
          backgroundImage: `linear-gradient(
            to bottom right,
            rgb(8 145 178 / 15%),
            rgb(30 64 175 / 35%) 85%,
            rgb(30 64 175 / 50%)
          ),
          url(/Content/images/bg2.png)`,
        }}
        id="section-experience"
      >
        <div
          className="absolute mt-[max(147px,calc(50vh-143px))] overflow-x-auto mx-[8px]"
          style={{
            width: `calc(100vw - 80px)`,
            height: `calc(270px + 1em)`,
            fontSize: "16px",
          }}
        >
          <ul class="timeline p-[10px] rounded-[12px]">
            <Timeline
              modalIsOpen={modalIsOpen}
              icon={`url("data:image/svg+xml,%3Csvg style='color: rgb(255,255,255);' stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 640 512' height='30' width='30' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z'%3E%3C/path%3E%3C/svg%3E")`}
              header={
                <>
                  <h2>2015 - 2020</h2>
                  <h2>Dalat University</h2>
                  <h2>Nuclear Engineering</h2>
                </>
              }
              details={
                <ModalElement
                  modalIsOpen={setModalIsOpen}
                  openModal={<button>Show Score</button>}
                  modalDetail={<LoginTable />}
                />
              }
            />
            <Timeline
              modalIsOpen={modalIsOpen}
              icon={`url("data:image/svg+xml,%3Csvg style='color: rgb(255,255,255);' stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 640 512' height='30' width='30' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z'%3E%3C/path%3E%3C/svg%3E")`}
              header={
                <>
                  <h2>2020 - 2021</h2>
                  <h2>Machine Learing</h2>
                  <h2>University of Science</h2>
                </>
              }
              details={
                <ModalElement
                  modalIsOpen={setModalIsOpen}
                  openModal={<button>Show Score</button>}
                  modalDetail={<ScoreTable />}
                />
              }
            />
            <Timeline
              icon={`url("data:image/svg+xml,%3Csvg style='color: rgb(255,255,255);' stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='24' width='24' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z'%3E%3C/path%3E%3Cpath d='M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z'%3E%3C/path%3E%3C/svg%3E")`}
              header={
                <>
                  <h2>2021 - 2022</h2>
                  <h2>VS Group</h2>
                  <h2>IT Technician</h2>
                </>
              }
            />
          </ul>
        </div>
      </section>
    </TableProvider>
  );
}

export default Experiences;
