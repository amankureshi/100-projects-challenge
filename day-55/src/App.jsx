import ExpenseList from "./Components/ExpenseList";
import { ExpenseProvider } from "./context/ExpenseContext";
import AddExpenseForm from "./Components/AddExpenseForm";
import walletImage from "./assets/wallet-img.png";
import "./App.css";
function App() {
  return (
    <ExpenseProvider>
      <div className="min-h-screen flex items-center justify-center hero-bg px-4 sm:px-6">
        <div className="bg-[#00023B] p-4 sm:p-6 rounded-xl shadow-md w-full max-w-md text-white">
          <h1 className="text-2xl sm:text-2xl  text-center text-white mb-4 flex flex-col sm:flex-row items-center justify-center">
            <img src={walletImage} alt="wallet" width={100} />
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
