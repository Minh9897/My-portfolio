import Modal from "react-modal";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

function ModalElement(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#section-experience");
  }, []);

  function openModal() {
    if (typeof props.modalIsOpen === "function") {
      props.modalIsOpen(true);
    }
    setIsOpen(true);
  }
  function closeModal() {
    if (typeof props.modalIsOpen === "function") {
      props.modalIsOpen(false);
    }
    setIsOpen(false);
  }

  return (
    <>
      <div className={props.className} onClick={openModal}>
        {props.openModal}
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Detail Modal"
        overlayClassName="overlay"
        className="modal"
      >
        <MdClose
          size="30"
          className="mr-0 ml-auto block hover:cursor-pointer"
          onClick={closeModal}
        />

        <div className="m-[20px] mt-0 overflow-y-auto max-h-[85vh] max-w-[85vw] md:text-[1.7rem] lg:text-[1.1rem] text-[3vw]">
          {props.modalDetail}
        </div>
      </Modal>
    </>
  );
}

export default ModalElement;
