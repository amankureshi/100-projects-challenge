import React from "react";
import { useDrag } from "react-dnd";

const Note = ({ note }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "note",
      item: { name: note },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          alert(`You threw ${item.name} into ${dropResult.name}`);
        }
      },
      colletct: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  return <div>{note}</div>;
};

export default Note;
