import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import PhotoGallery from "./Components/PhotoGallery ";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>
    </>
  );
}

export default App;
