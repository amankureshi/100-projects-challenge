import ExpenseList from "./components/ExpenseList";
import { ExpenseProvider } from "./context/ExpenseContext";
import AddExpenseForm from "./Components/AddExpenseForm";
import walletImage from "./assets/wallet-img.png";
import "./App.css";
function App() {
  return (
    <ExpenseProvider>
      <div className="min-h-screen flex items-center justify-center hero-bg">
        <div className="bg-[#00023B] p-6 rounded-xl shadow-md w-full max-w-md text-white">
          <h1 className="text-2xl  text-center text-white mb-4 flex items-center justify-center ">
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
