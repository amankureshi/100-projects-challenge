import { useEffect, useState } from "react";
import "./App.css";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const colors = ["#DABBFA", "#D7F3F5", "#F8A7AE", "#BD8BFE"];

  console.log(notes);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("note")) || [];
    setNotes(savedNotes);
  }, []);

  const addNote = (newText) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newNote = { text: newText, color: randomColor }; // 👈 Make it an object
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
