import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

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
    setTransactions([newTransation, ...transactions]);
    setDesc("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <GiMoneyStack className="text-green-900" />
        Budget Tracker
      </h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">
          Balance: ₹{(income + expense).toFixed(2)}
        </h2>
        <p className="text-green-600">Income: ₹{income.toFixed(2)}</p>
        <p className="text-red-600">Expense: ₹{Math.abs(expense).toFixed(2)}</p>
      </div>
      <form onSubmit={addTransaction} className="mb-4 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />
        <input
          type="number"
          placeholder="Amount (+ for income, - for expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </form>
      <h2 className="text-lg font-semibold mb-2">Transactions</h2>
      <ul>
        {transactions.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between mb-2 p-2 rounded ${
              t.amount > 0 ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <span>{t.desc}</span>
            <span className="flex">
              ₹{t.amount.toFixed(2)}
              <button
                onClick={() => deleteTransaction(t.id)}
                className="ml-3 text-xl text-red-500 hover:text-red-600"
              >
                <MdCancel />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
