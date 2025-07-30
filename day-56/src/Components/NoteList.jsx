import React from "react";

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.length > 0 ? <h1>You have a data</h1> : <p>No Notes Yet!</p>}
    </div>
  );
};

export default NoteList;
