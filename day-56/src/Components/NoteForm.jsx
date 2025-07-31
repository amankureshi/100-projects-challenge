import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote("");
    }
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Add a New Note</h5>
          <form onSubmit={handleSubmit}>
            <div className="row g-2">
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Write something..."
                  value={note}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-2 d-grid">
                <button type="submit" className="btn btn-primary">
                  Add Note
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
