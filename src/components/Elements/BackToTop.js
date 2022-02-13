import { useState, useEffect } from "react";

import { FaChevronUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Transition } from "react-transition-group";

const scrollToTop = () => {
  scroll.scrollToTop({
    smooth: "easeInOutCube",
    duration: 1000,
    containerId: "snapContainer",
  });
};

const BackToTop = (props) => {
  const [visible, setVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.getElementById("snapContainer").scrollTop;

    if (scrolled > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    document
      .getElementById("snapContainer")
      .addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Transition
      in={showButton}
      timeout={1000}
      unmountOnExit
      onEnter={() => {
        setVisible(true);
      }}
      onExit={() => {
        setVisible(false);
      }}
    >
      <button
        className="btn back-to-top items-center justify-center flex rounded-full z-[999]"
        style={{ opacity: visible ? "1" : "0" }}
        onClick={scrollToTop}
      >
        <FaChevronUp size="24" />
      </button>
    </Transition>
  );
};

export default BackToTop;
