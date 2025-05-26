import { faker } from "@faker-js/faker";
import RestartBtn from "./Components/RestartBtn.tsx";
import "./App.css";
import Results from "./Components/Results.tsx";
import UserTyping from "./Components/UserTyping.tsx";

const words = faker.word.words(10);
const App = () => {
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTyping className="absolute inset-0" userInput={"test"} />
      </WordsContainer>
      <RestartBtn
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={() => null}
      />
      <Results
        className="mt-10"
        errors={10}
        accuracyPercentage={100}
        total={200}
      />
    </>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed">
      {children}
    </div>
  )
}

const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-center text-slate-500">{words}</div>;
};
const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="font-medium text-amber-300">Time:{timeLeft}</h2>;
};
export default App;
