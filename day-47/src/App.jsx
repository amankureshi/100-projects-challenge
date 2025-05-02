import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import FavoritesPage from "./Pages/FavoritesPage";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
