import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState("");
  console.log(note);

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <h2>NoteForm</h2>
      <form>
        <input
          type="text"
          placeholder="write a new note"
          value={note}
          onChange={handleChange}
        />
      </form>
      <button>Add Note</button>
    </div>
  );
};

export default NoteForm;
