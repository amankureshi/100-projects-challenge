import React, { useState } from "react";
const ModalTest = () => {
  const [showModalpPopup, setShowModalPopup] = useState(false);
  function handleToggleModal() {
    setShowModalPopup(!showModalpPopup);
    console.log(showModalpPopup);
  }
  return (
    <>
      <button onClick={handleToggleModal}>Open modal popup</button>
    </>
  );
};
export default ModalTest;
