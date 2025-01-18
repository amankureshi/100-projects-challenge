import React, { useState } from "react";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("amankureshi");
  function handleSubmit() {}
  return (
    <>
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search Github Username"
            name="search-username"
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
    </>
  );
};

export default GithubProfileFinder;
