import "./App.css";
import Sidebar from "./Components/SideBar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
