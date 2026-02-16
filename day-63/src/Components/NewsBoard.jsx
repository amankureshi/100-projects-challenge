import { useEffect, useState } from "react";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json.data())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <di>
      <h2 className="text-center">
        Latest<span className="badge bg-danger">News</span>
      </h2>
    </di>
  );
};

export default NewsBoard;
