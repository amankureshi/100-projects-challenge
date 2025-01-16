import React, { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";
const ModalTest = () => {
  const [showModalpPopup, setShowModalPopup] = useState(false);

  function handleToggleModal() {
    setShowModalPopup(!showModalpPopup);
    // console.log(showModalpPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <>
      <div className="modal-btn-container">
        <button className="modal-btn" onClick={handleToggleModal}>
          Open modal popup
        </button>
      </div>
      {showModalpPopup && <Modal onClose={onClose} />}
    </>
  );
};
export default ModalTest;
