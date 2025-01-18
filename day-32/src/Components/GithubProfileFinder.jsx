import React, { useEffect, useState } from "react";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("amankureshi");

  function handleSubmit() {}

  useEffect(() => {
    fetcGithubUserData();
  }, []);

  return (
    <>
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search Github Username"
            name="search-username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>
    </>
  );
};

export default GithubProfileFinder;
