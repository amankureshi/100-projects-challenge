import "./App.css";
import GrammarChecker from "./components/GrammarChecker";
import grammarImage from "./assets/grammar_2.png";

function App() {
  return (
    <>
      <GrammarChecker />
      <img id="bottom-image" src={grammarImage} alt="Bottom Image" />
    </>
  );
}

export default App;
