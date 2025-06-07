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
          <input type="number" max={20} />
        </div>
        <div className="passwordLenght">
          <label>Include numbers</label>
          <input type="number" />
        </div>
        <div className="passwordLenght">
          <label>Include symbols</label>
          <input type="number" />
        </div>
        <button className="btn">Generate password</button>
      </div>
    </>
  );
}

export default App;
