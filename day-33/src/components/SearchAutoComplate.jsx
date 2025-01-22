import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";
import Loader from "../assets/Loader.gif";

const SearchAutoComplate = () => {
  const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterdUsers, setFilterdUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 2) {
      fetchListOfUsers(query);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchListOfUsers(query) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${query}`
      );
      const data = await response.json();
      console.log(data);

      if (data && data.users && data.users.length) {
        setFilterdUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      } else {
        setLoading(false);
        setFilterdUsers([]);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers(searchParam);
  }, []);

  return (
    <div className="top-content">
      <input
        value={searchParam}
        onChange={handleChange}
        type="text"
        name="search-user"
        placeholder="Search here"
      />

      {showDropdown && (
        <div className="dropdown-menu">
          {loading && (
            <img
              src={Loader}
              alt="loader-image"
              className="loader"
              width={"150px"}
            />
          )}
          <Suggestion
            handleClick={(event) => setSearchParam(event.target.innerText)}
            data={filterdUsers}
          />
        </div>
      )}
      <div className="footer">
        <p>
          1. Cheak out Console <br />
          2. Search First name
        </p>
      </div>
    </div>
  );
};

export default SearchAutoComplate;
