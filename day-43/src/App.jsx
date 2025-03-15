import { useState } from "react";
import "./App.css";
import FormDetails from "./Components/FormDetails";
import UserForm from "./Components/UserForm";

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
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === form.length - 1) {
      console.log("Form submited");
      setIsFormSubmitted(true);
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
      {!isFormSubmitted ? (
        <UserForm
          index={index}
          form={form}
          formData={formData}
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <FormDetails formData={formData} />
      )}
    </>
  );
}

export default App;
