import "./App.css";
import Introduction from "./Components/Introduction";
import { BrowserRouter, Router } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Introduction />
    </BrowserRouter>
  );
}

export default App;
