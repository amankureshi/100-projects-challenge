import ExpenseList from "./components/ExpenseList";
import { ExpenseProvider } from "./context/ExpenseContext";
import AddExpenseForm from "./Components/AddExpenseForm";

import "./App.css";
function App() {
  return (
    <ExpenseProvider>
      <div className="app">
        <h2>Expense Tracker</h2>
        <AddExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
}

export default App;
