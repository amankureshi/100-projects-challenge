import { useState } from "react";
import "./App.css";
import Navabar from "./Components/Navabar";
import NewsBoard from "./Components/NewsBoard";
import Footer from "./Components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navabar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer />
    </>
  );
}

export default App;
