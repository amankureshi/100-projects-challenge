import "./App.css";

function App() {
  return (
    <>
      <div className="passbox">
        <h2>Password Generator</h2>
        <div className="passwordBoxInput">
          <input type="text" /> <button>copy</button>
        </div>
        <div className="passwordLenght">
          <label>Password lenght</label>
          <input type="number" />
        </div>
      </div>
    </>
  );
}

export default App;
