import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { FaCirclePlus } from "react-icons/fa6";

const AddExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const { dispatch } = useContext(ExpenseContext);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || amount <= 0) {
      alert("Please enter valid title and amount.");
    }
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date(),
    };
    dispatch({ type: "ADD", payload: newExpense });
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <select
        className="w-full p-2 border rounded bg-[#00023B]"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled hidden>
          Select Category
        </option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Shopping">Shopping</option>
      </select>
      <div className="flex justify-end">
        <button
          className="btn bg-[#56DFB1] text-[#00023B] py-2 rounded hover:bg-[#3aa986] flex items-center justify-center gap-1"
          type="submit"
        >
          Add <FaCirclePlus />
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
