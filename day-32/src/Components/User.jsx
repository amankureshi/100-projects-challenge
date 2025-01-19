import React from "react";

const User = ({ user }) => {
  const { avatar_url, followers, following, public_repos, name, login } = user;

  return (
    <div className="user-container">
      <div className="user-image">
        <img src={avatar_url} alt="user" className="avatar" />
        <h1>Aman</h1>
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
    </div>
  );
};

export default User;
