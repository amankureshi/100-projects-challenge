import React, { useState } from "react";

const NoteForm = () => {
  const [note, setNote] = useState("");
  return (
    <div>
      <h2>NoteForm</h2>
      <form>
        <input type="text" placeholder="write a new note" value={note} />
      </form>
      <button>Add Note</button>
    </div>
  );
};

export default NoteForm;
