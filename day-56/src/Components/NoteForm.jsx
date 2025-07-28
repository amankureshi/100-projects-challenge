import React from "react";

const NoteForm = () => {
  return (
    <div>
      <h2>NoteForm</h2>
      <form>
        <input type="text" placeholder="write a new note" />
      </form>
      <button>Add Note</button>
    </div>
  );
};

export default NoteForm;
