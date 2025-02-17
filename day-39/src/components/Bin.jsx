import React from "react";
import { useDrop } from "react-dnd";

const Bin = ({ binnedItems }) => {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: "note",
      drop: () => ({ name: "the bin" }),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    []
  );

  return (
    <div className="flex justify-center">
      <div
        className="border m-2 rounded-sm h-48 flex text-center justify-center items-center w-4xl"
        ref={drop}
      >
        <h2 className="text-cetner font-medium py-2 ">Drop Here.......</h2>
        {binnedItems.map((item, i) => (
          <div key={i}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bin;
