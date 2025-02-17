import React from "react";
import { useDrop } from "react-dnd";
import { TbDragDrop2 } from "react-icons/tb";

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
    <div className="flex justify-center align-middle text-center">
      <div
        className="border-2 border-amber-950 p-3 mt-20 rounded-sm flex flex-col justify-center align-middle  text-center "
        ref={drop}
      >
        <h2 className="text-cetner flex gap-2 font-medium">
          Drop Here <TbDragDrop2 className="mt-1 text-[20px] " />
        </h2>
        {binnedItems.map((item, i) => (
          <div key={i} className="card">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bin;
