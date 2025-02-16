import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <h1 className="text-3xl font-bold text-center">Aman Kureshi</h1>
      </DndProvider>
    </>
  );
}

export default App;
