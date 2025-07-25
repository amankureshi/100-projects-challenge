import RestartBtn from "./Components/RestartBtn.tsx";
import "./App.css";
import Results from "./Components/Results.tsx";
import UserTyping from "./Components/UserTyping.tsx";
import useEngine from "./Hooks/useEngine.tsx";
import { calclateAccuracyPercentage } from "./utils/Helper.ts";

const App = () => {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } = useEngine();
  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTyping
          className="absolute inset-0"
          userInput={typed}
          words={words}
        />
      </WordsContainer>
      <RestartBtn
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        state={state}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calclateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-3xl leading-relaxed font-sans">{children}</div>
  );
};

const GenerateWords = ({ words }: { words: string }) => {
  return <div className=" text-white font-sans">{words}</div>;
};
const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="font-medium text-2xl text-amber-300 font-time">Time:{timeLeft}</h2>;
};
export default App;
