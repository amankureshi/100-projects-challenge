import ExpenseList from "./components/ExpenseList";
import { ExpenseProvider } from "./context/ExpenseContext";
import AddExpenseForm from "./Components/AddExpenseForm";

import "./App.css";
function App() {
  return (
    <ExpenseProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Expense Tracker
          </h2>
          <AddExpenseForm />
          <hr className="my-4" />
          <ExpenseList />
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
