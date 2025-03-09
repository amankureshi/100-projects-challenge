import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <button>Next</button>
      </div>
    </>
  );
}

export default App;
