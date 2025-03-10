import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      ButtonName: "Next",
      placeholder: "Your Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      ButtonName: "Next",
      placeholder: "Your Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      placeholder: "",
      ButtonName: "Next",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      placeholder: "Your password...",
      ButtonName: "Next",
    },
  ];
  const [form, setForm] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="container">
        <div className="form-group">
          <label htmlFor="name">{form[index].label}</label>
          <input
            type={form[index].inputType}
            id="name"
            placeholder={form[index].placeholder}
          />
        </div>
        <button>{form[index].ButtonName}</button>
      </div>
    </>
  );
}

export default App;
