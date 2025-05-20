import { faker } from "@faker-js/faker";
import './App.css'

const words = faker.word.words(10)
const App = () => {
  return <>
    <CountdownTimer timeLeft={30} />
    <GenerateWords words={words} />

  </>
}
const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-slate-500">
    {words}
  </div>
}
const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="font-medium text-amber-300">
    Time:{timeLeft}
  </h2>
}
export default App
