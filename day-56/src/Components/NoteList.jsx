import React from "react";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="container my-4">
      <h4 className="mb-3"> Your Notes</h4>
      {notes.length > 0 ? (
        <div className="row">
          {notes.map((note, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0 bg-light">
                <div className="card-body d-flex flex-column">
                  <p className="card-text flex-grow-1">{note}</p>
                  <button
                    className="btn btn-outline-danger mt-2"
                    onClick={() => deleteNote(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-info">No Notes Yet!</div>
      )}
    </div>
  );
};

export default NoteList;
