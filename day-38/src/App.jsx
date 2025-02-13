import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  return (
    <>
      <main className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="container" style={{ width: "26rem" }}>
          <h2>Password Validation</h2>
          <form onSubmit={handleValidation}>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control "
                id="formGroupExampleInput"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-md">
              Sign in
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
