const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card h-100 border-0 shadow-sm news-card">
      <img
        src={src || "https://via.placeholder.com/400x250"}
        className="card-img-top"
        alt="news"
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-semibold mb-3">
          {title?.slice(0, 60)}...
        </h5>

        <p className="card-text text-muted flex-grow-1">
          {description
            ? description.slice(0, 100) + "..."
            : "No description available."}
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
