import React, { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";
const ModalTest = () => {
  const [showModalpPopup, setShowModalPopup] = useState(false);
  function handleToggleModal() {
    setShowModalPopup(!showModalpPopup);
    // console.log(showModalpPopup);
  }
  return (
    <>
      <button onClick={handleToggleModal}>Open modal popup</button>
      {showModalpPopup && <Modal />}
    </>
  );
};
export default ModalTest;
