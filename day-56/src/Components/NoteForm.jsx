import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState("");

  console.log(note);

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote("");
    }
  };

  return (
    <div>
      <h2>NoteForm</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write a new note"
          value={note}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit}>Add Note</button>
    </div>
  );
};

export default NoteForm;
