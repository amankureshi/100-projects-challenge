import React from "react";

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <div key={index} className="note">
            <span>{note}</span>
            <button>delete</button>
          </div>
        ))
      ) : (
        <p>No Notes Yet!</p>
      )}
    </div>
  );
};

export default NoteList;
