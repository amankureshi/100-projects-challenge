import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container py-5">
      <h5 className="text-start mb-5 text-capitalize fw-bold ">
        <span className="border px-2 bg-danger text-white">{category}</span>{" "}
        News
      </h5>

      <div className="row g-4">
        {articles.map((news, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
