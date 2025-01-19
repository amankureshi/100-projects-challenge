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
      </div>
      <div>
        <a href={`https://github.com/${login}`} className="Heading">
          {name || login}
        </a>
        <p>
          user joined on{" "}
          {`${createDate.getDate()}${createDate.toLocaleString("en-us", {
            month: "short",
          })} ${createDate.getFullYear()}`}
        </p>
      </div>
      <div className="last-content">
        <h2>Public Repos</h2>
        <p>{public_repos}</p>
      </div>
      <div className="last-content">
        <h2>Followers</h2>
        <p>{followers}</p>
      </div>
      <div className="last-content">
        <h2>Following</h2>
        <p>{following}</p>
      </div>
    </div>
  );
};

export default User;
