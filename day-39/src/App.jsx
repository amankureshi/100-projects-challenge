import { useEffect, useState } from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Bin from "./components/Bin";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [binnedItems, setBinnedItems] = useState([]);

  useEffect(() => {
    const initialNotes = ["Note 1", "Note 2", "Note 3"];
    localStorage.setItem("noteList", JSON.stringify(initialNotes));

    let array = localStorage.getItem("noteList");
    setNotes(JSON.parse(array));
  }, []);

  console.log(notes);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <h1 className="text-3xl font-bold text-center">Aman Kureshi</h1>
        {notes.map((item) => (
          <Note
            key={new Date().getTime() + Math.floor(Math.random() * 1000)}
            note={item}
          />
        ))}
        <Bin />
      </DndProvider>
    </>
  );
}

export default App;
