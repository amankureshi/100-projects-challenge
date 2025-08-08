import { useState } from "react";
import "./App.css";

function App() {
  const [tranction, setTraction] = useState([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <>
      <form>
        <input type="text" placeholder="Discription" />
        <input type="number" placeholder="Amount" />
        <button>Add Transation</button>
      </form>
    </>
  );
}

export default App;
