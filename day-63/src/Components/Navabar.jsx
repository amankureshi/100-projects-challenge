import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Navabar = ({ setCategory }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg container-fluid p-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <a href="#" className="text-dark fs-5">
              <IoLogoInstagram />
            </a>
            <a href="#" className="text-dark fs-5">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-dark fs-5">
              <FaFacebookF />
            </a>
            <a href="#" className="text-dark fs-5">
              <FaGithub />
            </a>
          </div>

          <h1 className="navbar-brand mx-auto text-uppercase fs-2" href="#">
            Sirat<span className="text-danger"> News</span>
          </h1>

          <button className="btn btn-dark rounded-0 px-4 py-3.5 fs-6 subscribeBtn">
            Subscribe
          </button>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg border-top border-bottom border-dark bg-light">
        <div className="container-fluid p-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse pointer fw-bold"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav mx-auto text-center gap-3">
              <div
                className="nav-link text-black"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
              <div
                className="nav-link text-black"
                onClick={() => setCategory("business")}
              >
                Business
              </div>
              <div
                className="nav-link text-black"
                onClick={() => setCategory("health")}
              >
                Health
              </div>
              <div
                className="nav-link text-black"
                onClick={() => setCategory("sports")}
              >
                Sports
              </div>
              <div
                className="nav-link text-black"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navabar;
