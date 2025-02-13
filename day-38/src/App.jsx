import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <form>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Example label
            </label>
            <input
              type="text"
              class="form-control w-auto"
              id="formGroupExampleInput"
              placeholder="Example input placeholder"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-md">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
