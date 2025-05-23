import React from "react";

const Suggestion = ({ data, handleClick }) => {
  return (
    <div className="suggest-container">
      <ul>
        {data && data.length
          ? data.map((item, index) => (
              <li key={index} onClick={handleClick}>
                {item}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Suggestion;
