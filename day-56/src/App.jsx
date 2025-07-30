import { useEffect, useState } from "react";
import "./App.css";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("note")) || [];
    setNotes(savedNotes);
  }, []);

  const addNote = (newNote) => {
    const updateNotes = [...notes, newNote];
    setNotes(updateNotes);
    localStorage.setItem("note", JSON.stringify(updateNotes));
  };

  const deleteNote = (index) => {
    const updateNotes = notes.filter((_, i) => i !== index);
    setNotes(updateNotes);
    localStorage.setItem("note", JSON.stringify(updateNotes));
  };

  return (
    <>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </>
  );
}

export default App;
