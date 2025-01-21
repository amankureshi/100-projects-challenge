import React from "react";
import { LuUsers } from "react-icons/lu";
import { RiGitRepositoryLine } from "react-icons/ri";

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
      <div className="hero-content">
        <a
          href={`https://github.com/${login}`}
          className="Heading"
          target="_blank"
        >
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
        <h2>
          Public Repos
          <RiGitRepositoryLine />
        </h2>
        <p>{public_repos}</p>
      </div>
      <div className="last-content">
        <h2>
          Followers <LuUsers />
        </h2>
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
