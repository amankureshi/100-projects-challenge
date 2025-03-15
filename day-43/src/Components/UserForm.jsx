import React from "react";
import { FaFileWaveform } from "react-icons/fa6";

const UserForm = (props) => {
  const { handleSubmit, index, handleBack, form, formData, handleInputChange } =
    props;
  return (
    <>
      <div className="container">
        <h1>
          Multi Step Form
          <FaFileWaveform />
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {index > 0 && (
              <a href="/" onClick={handleBack}>
                Back
              </a>
            )}
            <label htmlFor={form[index].id}>{form[index].label}</label>
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
    </>
  );
};

export default UserForm;
