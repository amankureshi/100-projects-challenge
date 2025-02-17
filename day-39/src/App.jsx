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

  useEffect(() => {
    let array = localStorage.getItem("binnedItems");

    if (array) {
      setBinnedItems(JSON.parse(array));
      for (let i = 0; i < notes.length; i++) {
        for (let j = 0; j < binnedItems.length; j++) {
          if (notes[i] === binnedItems[j]) {
            notes.splice(i, 1);
          }
        }
      }
    }
  }, [notes]);

  console.log(notes);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <h1 className="text-3xl font-bold text-center pt-10 pb-3">
          Drag and Drop - DnD Library
        </h1>
        {notes.map((item) => (
          <div className="notes-container">
            <Note
              key={new Date().getTime() + Math.floor(Math.random() * 1000)}
              note={item}
              binnedItems={binnedItems}
            />
          </div>
        ))}
        <Bin binnedItems={binnedItems} />
      </DndProvider>
    </>
  );
}

export default App;
