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
      ButtonName: "Submit",
    },
  ];
  const [form, setForm] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === form.length - 1) {
      console.log("Form submited");
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };
  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };
  console.log("formData-->", formData);
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {index > 0 && (
              <a href="/" onClick={handleBack}>
                Back
              </a>
            )}
            <label htmlFor="name">{form[index].label}</label>
            <input
              value={formData[form[index].id]}
              id={form[index].id}
              onChange={handleInputChange}
              type={form[index].inputType}
              placeholder={form[index].placeholder}
            />
          </div>
          <button>{form[index].ButtonName}</button>
        </form>
      </div>
      <div>
        <h1>Success !</h1>
        <hr />
        <span>Name : {formData.name}</span>
        <br />
        <span>Email : {formData.email}</span>
        <br />
        <span>dob : {formData.dob}</span>
        <br />
        <span>password : {formData.password}</span>
        <br />
      </div>
    </>
  );
}

export default App;
