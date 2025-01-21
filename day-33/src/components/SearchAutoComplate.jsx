import React, { useEffect, useState } from "react";

const SearchAutoComplate = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h1>Search</h1>
      <input type="text" name="search-user" placeholder="Search here" />
    </div>
  );
};

export default SearchAutoComplate;
