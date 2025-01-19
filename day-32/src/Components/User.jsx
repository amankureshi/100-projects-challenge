import React from "react";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createDate = new Date(created_at);

  return (
    <div className="user-container">
      <div className="user-image">
        <img src={avatar_url} alt="user" className="avatar" />
        <h1>Aman</h1>
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          user joined on{" "}
          {`${createDate.getDate()}${createDate.toLocaleString("en-us", {
            month: "short",
          })} ${createDate.getFullYear()}`}
        </p>
      </div>
      <div className="last-content">
        <h1>Public Repos</h1>
        <p>{public_repos}</p>
      </div>
      <div className="last-content">
        <h1>Followers</h1>
        <p>{followers}</p>
      </div>
      <div className="last-content">
        <h1>Following</h1>
        <p>{following}</p>
      </div>
    </div>
  );
};

export default User;
