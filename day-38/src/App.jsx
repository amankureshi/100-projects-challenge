import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <form>
          <div class="row mb-3 mt-4">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-5">
              <input type="password" class="form-control" id="inputPassword3" />
            </div>
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
