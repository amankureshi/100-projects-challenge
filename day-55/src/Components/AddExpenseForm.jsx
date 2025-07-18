import React, { useContext, useState } from "react";
// import ExpneseContext from "../context/ExpneseContext";
import { ExpenseContext } from "../context/ExpenseContext";
const AddExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const { dispatch } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || amount <= 0) {
      alert("Please enter valid title and amount.");
    }
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };
    dispatch({ type: "ADD", payload: newExpense });
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddExpenseForm;
