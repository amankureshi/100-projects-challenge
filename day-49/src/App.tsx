import { faker } from "@faker-js/faker";
import './App.css'

const words = faker.word.words(10)
function App() {
  return (
    <>
      <h2 className='text-4xl text-amber-300'>{words}</h2>
    </>
  )
}

export default App
