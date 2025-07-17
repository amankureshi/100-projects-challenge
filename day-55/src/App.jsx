import "./App.css";
import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseList from "./components/ExpenseList";
function App() {
  return (
    <ExpenseProvider>
      <div className="app">
        <h2>Expense Tracker</h2>
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
}

export default App;
