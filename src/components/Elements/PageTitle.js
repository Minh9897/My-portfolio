function Pagetitle(props) {
  return (
    <div className="page-title rotating-border relative rotating-border--animation my-[3vh] whitespace-nowrap">
      <span className="title-text">{props.title}</span>
    </div>
  );
}

export default Pagetitle;
