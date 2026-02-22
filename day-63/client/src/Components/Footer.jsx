import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light text-center position-sticky"
      id="contactUs"
    >
      <div className="container p-4 pb-0">
        <section>
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our Sirat News</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-danger mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2026 Copyright:
        <a className="text-light" href="https://amankureshi.vercel.app">
          Aman Kureshi
        </a>
      </div>
    </footer>
  );
};

export default Footer;
