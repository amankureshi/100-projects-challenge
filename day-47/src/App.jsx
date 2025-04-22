import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/SideBar";
import Home from "./Pages/Home";
import FavoritesPage from "./Pages/FavoritesPage";

function App() {
  return (
    <>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
