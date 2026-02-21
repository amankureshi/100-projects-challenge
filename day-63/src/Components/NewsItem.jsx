import { useState } from "react";
import NewsImage from "../assets/news.jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsItem = ({ title, description, src, url }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="card h-100 border-0 shadow-sm news-card">
      {!imageLoaded && <Skeleton height={220} />}
      <img
        src={src || NewsImage}
        className="card-img-top"
        alt="news"
        style={{
          height: "220px",
          objectFit: "cover",
          display: imageLoaded ? "block" : "none",
        }}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-semibold mb-3">
          {title ? title?.slice(0, 60) + "..." : <Skeleton width={150} />}
        </h5>

        <p className="card-text text-muted flex-grow-1">
          {description ? (
            description.slice(0, 100) + "..."
          ) : (
            <Skeleton count={3} />
          )}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark mt-auto"
        >
          Read Full Article →
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
