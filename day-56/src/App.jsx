import { useState } from "react";
import "./App.css";
import NoteForm from "./Components/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  const addNote = (newNote) => {
    const updateNotes = [...notes, newNote];
    setNotes(updateNotes);
  };

  return (
    <>
      <NoteForm addNote={addNote} />
    </>
  );
}

export default App;
