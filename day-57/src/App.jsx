import { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
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
    setTraction([newTransation, ...transactions]);
    setDesc("");
    setAmount("");
  };
  const deleteTranction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);
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
