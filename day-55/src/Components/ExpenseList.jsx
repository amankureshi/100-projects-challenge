import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { state, dispatch } = useContext(ExpenseContext);
  const sortedExpensesByDate = [...state].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <ul>
      {sortedExpensesByDate.map((item) => (
        <li key={item.id}>
          {item.title} - ₹{item.amount} - <strong> {item.category}</strong>-
          {new Date(item.date).toLocaleString()}
          <button
            onClick={() => dispatch({ type: "DELETE", payload: item.id })}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
