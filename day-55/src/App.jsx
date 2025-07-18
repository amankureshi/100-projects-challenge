import ExpenseList from "./components/ExpenseList";
import { ExpenseProvider } from "./context/ExpenseContext";
import AddExpenseForm from "./Components/AddExpenseForm";

import "./App.css";
function App() {
  return (
    <ExpenseProvider>
      <div className="min-h-screen flex items-center justify-center bg-[#D9D9D9]">
        <div className="bg-[#00023B] p-6 rounded-xl shadow-md w-full max-w-md text-white">
          <h1 className="text-2xl font-bold text-center text-white mb-4">
            My Budget Tracker
          </h1>
          <AddExpenseForm />
          <hr className="my-4" />
          <ExpenseList />
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
