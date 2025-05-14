import "./App.css";

function App() {
  return (
    <>
      <h1>Aman Kureshi</h1>
      <div className="cotainer">
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Wight(ibs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
            />
          </div>
          <div>
            <label>Height(ibs)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
