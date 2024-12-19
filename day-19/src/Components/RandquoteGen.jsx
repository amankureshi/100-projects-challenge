import React, { useState } from "react";
import "./RandquoteGen.css";
function RandquoteGen() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const apiUrl = "https://dummyjson.com/quotes/random";
  const fetchQuote = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.log("Error fetching quote", error);
    }
  };

  useState(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote_container">
      <h1>Words to Live By</h1>
      <div className="quote-box">
        <p className="quote-text text-center">{quote || "Loading quote...."}</p>
        <p className="qoute-write text-center">{author || "Loading author"}</p>
      </div>
      <button className=" btn-primary mt-4" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
}

export default RandquoteGen;
