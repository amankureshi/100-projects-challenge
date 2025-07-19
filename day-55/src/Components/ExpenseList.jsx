import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { ImCross } from "react-icons/im";

const ExpenseList = () => {
  const { state, dispatch } = useContext(ExpenseContext);
  const sortedExpensesByDate = [...state].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <ul className="space-y-3">
      {sortedExpensesByDate.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center bg-gray-50 p-3 rounded border"
        >
          <div className="w-full">
            <p className="font-medium text-[#00023B]">{item.title}</p>

            <div className="flex justify-between items-center text-sm text-gray-600 w-full">
              <span className="text-left">
                ₹{item.amount} · {item.category}
              </span>

              <span className="text-center flex-1">
                {new Date(item.date).toLocaleDateString()}
              </span>
              <span className="text-right">
                {new Date(item.date).toLocaleTimeString()}
              </span>
            </div>
          </div>
          <button
            onClick={() => dispatch({ type: "DELETE", payload: item.id })}
            className="text-red-500 hover:text-red-700 text-lg cursor-pointer pb-5"
          >
            <ImCross />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
