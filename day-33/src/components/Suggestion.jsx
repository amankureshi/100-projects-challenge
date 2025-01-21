import React from "react";

const Suggestion = ({ data }) => {
  return (
    <div>
      <ul>
        {data && data.length
          ? data.map((item, index) => <li>{item}</li>)
          : null}
      </ul>
    </div>
  );
};

export default Suggestion;
