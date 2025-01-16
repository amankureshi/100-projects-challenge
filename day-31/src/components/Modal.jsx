import React from "react";
const Modal = ({ id, header, body, footer }) => {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This if out Modal</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
};

export default Modal;
