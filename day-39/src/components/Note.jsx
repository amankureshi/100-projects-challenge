import React from "react";
import { useDrag } from "react-dnd";

const Note = ({ note, binnedItems }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "note",
      item: { name: note },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          alert(`You threw ${item.name} into ${dropResult.name}`);
          let tempList = binnedItems;
          tempList.push(item.name);
          localStorage.setItem("binnedItems", JSON.stringify(tempList));
          window.location.reload();
        }
      },
      colletct: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <div className="flex justify-center">
      <div
        className="card"
        style={{ opacity: isDragging ? 0.5 : 1 }}
        ref={drag}
      >
        {note}
      </div>
    </div>
  );
};

export default Note;
