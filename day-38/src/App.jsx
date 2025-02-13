import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setPassword(e.target.value);
    console.log(password);
  }
  const handleValidation = (e) => {
    e.preventDefault();
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    if (password === "") {
      setMessage("Please enter password");
    } else if (regExp.test(password)) {
      setMessage("Password in Valid");
    } else if (!regExp.test(password)) {
      setMessage("password is not Valid");
    } else {
      setMessage("Password is Valid");
    }
  };
  return (
    <>
      <main className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="container" style={{ width: "26rem" }}>
          <h2>Password Validation</h2>
          <form onSubmit={handleValidation}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  onChange={handleChange}
                  value={password}
                />
                <button type="button" className="btn ">
                  <i
                    onClick={() => setShowPassword(!showPassword)}
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
                <p style={{ color: "red" }}>{message}</p>
              </div>
            </div>
            <button className="btn btn-primary btn-md">Sign in</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
