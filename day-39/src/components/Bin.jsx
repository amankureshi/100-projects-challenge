import React from "react";
import { useDrop } from "react-dnd";

const Bin = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "note",
    drop: () => ({ name: "the bin" }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div>
      <h2 className="text-cetner font-medium py-2">Bin</h2>
    </div>
  );
};

export default Bin;
