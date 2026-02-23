import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `https://p1-server-z76q.onrender.com/news?category=${category}`;

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setArticles([]);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container py-5">
      <h5 className="text-start mb-5 text-capitalize fw-bold ">
        <span className="border px-2 bg-danger text-white">{category}</span>{" "}
        News
      </h5>

      <div className="row g-4">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="card p-3">
                    <Skeleton height={200} />
                    <h5 className="mt-3">
                      <Skeleton height={25} />
                    </h5>
                    <p>
                      <Skeleton count={3} />
                    </p>
                  </div>
                </div>
              ))
          : articles.map((news, index) => (
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
