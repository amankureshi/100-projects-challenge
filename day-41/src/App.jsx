import "./App.css";
import Introduction from "./Components/Introduction";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PhotoGallery from "./Components/PhotoGallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
