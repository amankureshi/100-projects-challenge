import React, { useEffect, useState } from "react";

const SearchAutoComplate = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterdUsers, setFilterdUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterdUsers(filterData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filterdUsers);

  return (
    <div>
      <h1>Search</h1>
      <input
        value={searchParam}
        onChange={handleChange}
        type="text"
        name="search-user"
        placeholder="Search here"
      />
    </div>
  );
};

export default SearchAutoComplate;
