import { useState, useEffect, useRef } from "react";

function Timeline(props) {
  const [firstRender, setFirstRender] = useState(false);
  const [detailHeight, setDetailHeight] = useState("");
  const [initHeight, setInitHeight] = useState("auto");
  const [detailWidth, setDetailWidth] = useState("");
  const [details, setDetails] = useState(props.details);
  const detailRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    setDetailHeight(detailRef.current.clientHeight);
    setDetailWidth(titleRef.current.clientWidth);
    setFirstRender(true);
  }, []);

  useEffect(() => {
    setInitHeight(0);
  }, [firstRender]);

  useEffect(() => {
    if (!props.modalIsOpen && firstRender) {
      setDetails();
    }
  }, [props.modalIsOpen, firstRender]);

  return (
    <li
      onMouseEnter={() => setDetails(props.details)}
      onClick={() => setDetails(props.details)}
      style={{
        ["--detail-width"]: detailWidth + 22 + "px",
        ["--detail-height"]: detailHeight + "px",
        ["--init-height"]: initHeight,
        ["--icon"]: props.icon,
      }}
    >
      <div className="timeline-info">
        <div className="relative m-[10px]">
          <div className="title" ref={titleRef}>
            {props.header}
          </div>
          <div class="detail-timeline" ref={detailRef}>
            {details}
          </div>
        </div>
      </div>
    </li>
  );
}

export default Timeline;
