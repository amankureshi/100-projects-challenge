import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { state, dispatch } = useContext(ExpenseContext);
  return (
    <ul>
      {state.map((item) => (
        <li key={item.id}>
          {item.title} - ₹{item.amount} - {item.category}
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
