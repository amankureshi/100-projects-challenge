import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { Link, Element } from "react-scroll";

const Navabar = ({ setCategory }) => {
  // Category click handler
  const handleCategoryClick = (category) => {
    setCategory(category);

    const offcanvasElement = document.getElementById("mobileMenu");

    if (window.bootstrap && offcanvasElement) {
      const bsOffcanvas =
        window.bootstrap.Offcanvas.getInstance(offcanvasElement) ||
        new window.bootstrap.Offcanvas(offcanvasElement);

      bsOffcanvas.hide();
    }
  };

  return (
    <header>
      {/* ================= TOP NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid p-4 border-bottom">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="d-none d-lg-flex gap-4">
            <IoLogoInstagram className="fs-5" />
            <FaLinkedinIn className="fs-5" />
            <FaBluesky className="fs-5" />
            <FaGithub className="fs-5" />
          </div>

          <h1 className="navbar-brand mx-auto text-uppercase fs-2 m-0">
            Sirat<span className="text-danger"> News</span>
          </h1>

          {/* Subscribe - Desktop Only */}
          <button className="btn btn-dark rounded-0 px-4 py-2 d-none d-lg-block">
            Subscribe
          </button>

          {/* Hamburger - Mobile Only */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* ================= DESKTOP CATEGORY NAV ================= */}
      <nav className="navbar navbar-expand-lg border-top border-bottom border-dark bg-light d-none d-lg-flex">
        <div className="container-fluid justify-content-center fw-bold gap-4 py-3">
          <div
            className="nav-link text-dark"
            onClick={() => setCategory("technology")}
          >
            Technology
          </div>

          <div
            className="nav-link text-dark"
            onClick={() => setCategory("business")}
          >
            Business
          </div>

          <div
            className="nav-link text-dark"
            onClick={() => setCategory("health")}
          >
            Health
          </div>

          <div
            className="nav-link text-dark"
            onClick={() => setCategory("sports")}
          >
            Sports
          </div>

          <Link
            className="nav-link text-dark"
            onClick={() => setCategory("entertainment")}
          >
            Entertainment
          </Link>

          <Link className="nav-link text-dark" to="contactUs">
            Contact Us
          </Link>
        </div>
      </nav>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="mobileMenu"
      >
        {/* Sidebar Header */}
        <div className="offcanvas-header border-bottom">
          <h2 className="text-uppercase fw-bold m-0">
            Sirat<span className="text-danger"> News</span>
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        {/* Sidebar Body */}
        <div className="offcanvas-body fw-semibold fs-5 d-flex flex-column gap-4 mt-3">
          <div onClick={() => handleCategoryClick("technology")}>
            Technology
          </div>

          <div onClick={() => handleCategoryClick("business")}>Business</div>

          <div onClick={() => handleCategoryClick("health")}>Health</div>

          <div onClick={() => handleCategoryClick("sports")}>Sports</div>

          <div onClick={() => handleCategoryClick("entertainment")}>
            Entertainment
          </div>

          <Link to="contactUs">Contact</Link>

          <button className="btn btn-dark rounded-0 mt-4">Subscribe</button>
        </div>
      </div>
    </header>
  );
};

export default Navabar;
