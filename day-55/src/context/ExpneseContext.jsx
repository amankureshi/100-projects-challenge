import React, { createContext, useEffect, useReducer } from "react";

const ExpenseContext = createContext();

const initialState = JSON.parse(localStorage.getItem("expenses")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const ExpneseProvider = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(state));
  }, [state]);

  return (
    <ExpenseContext.Provider value={{ state, dispath }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default { ExpenseContext, ExpneseProvider };
