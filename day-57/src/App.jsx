import { useState } from "react";
import "./App.css";

function App() {
  const [transaction, setTraction] = useState([]);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;
    const newTransation = {
      id: Date.now(),
      desc,
      amount: parseFloat(amount),
    };
    setTraction([newTransation, ...transaction]);
    setDesc("");
    setAmount("");
  };

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
