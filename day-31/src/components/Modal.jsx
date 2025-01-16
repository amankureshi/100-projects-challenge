import React from "react";
const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>
                This is a customizable modal where you can add any content you
                like. Here’s an example of a modal with various types of
                content:
              </p>
              <ul>
                <li>Display important information</li>
                <li>Provide updates or announcements</li>
                <li>Include additional options or actions</li>
              </ul>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? footer : <a>Read the related content</a>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
