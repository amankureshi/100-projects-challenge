import React, { useEffect, useState } from "react";

const SearchAutoComplate = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchListOfUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div>
      <h1>Search</h1>
      <input type="text" name="search-user" placeholder="Search here" />
    </div>
  );
};

export default SearchAutoComplate;
