import React, { useContext, useState } from "react";
import ExpneseContext from "../context/ExpneseContext";

const AddExpeseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const { dispatch } = useContext(ExpneseContext);

  return (
    <form>
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

export default AddExpeseForm;
