import "./App.css";
import GrammarChecker from "./components/GrammarChecker";
import grammarImage from "./assets/grammar_2.png";
import { TbTextGrammar } from "react-icons/tb";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="flex items-center justify-center mb-6 font-bold text-gray-800 text-2xl sm:text-1xl md:text-4xl">
        <TbTextGrammar className="mr-2" />
        Grammar
        <span className="text-pink-700 ml-2">Checker</span>
      </h1>
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 relative z-10">
        <GrammarChecker />
      </div>
      <img
        id="bottom-image"
        src={grammarImage}
        alt="Grammar Illustration"
        className="pointer-events-none select-none max-md:hidden"
      />
    </div>
  );
}

export default App;
