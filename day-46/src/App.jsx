import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import CountryDetails from "./Components/CountryDetails ";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/:countryName" element={<CountryDetails />} />
        <Route path="/" element={<Introduction />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
