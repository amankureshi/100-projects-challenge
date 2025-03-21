import React from "react";

const FormDetails = (props) => {
  const { formData } = props;
  return (
    <div className="success-container">
      <h2>Success !</h2>
      <hr />
      <span>Name: {formData.name}</span>
      <br />
      <span>Email: {formData.email}</span>
      <br />
      <span>dob: {formData.dob}</span>
      <br />
      <span>password: {formData.password}</span>
      <br />
    </div>
  );
};

export default FormDetails;
