import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-lg-auto col-md-8 col-10">
            <h1 className="text-white" data-aos="fade-up" data-aos-delay="100">
              We make creative <strong>brands</strong> only.
            </h1>
          </div>

          <div
            className="col-lg-3 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="my-4">Nous contacter</h4>

            <p className="mb-1">
              <i className="bi bi-phone me-2 footer-icon"></i>
              +216 54482172
            </p>

            <p>
              <a href="#">
                <i className="bi bi-envelope me-2 footer-icon"></i>
                docovery@outlook.com
              </a>
            </p>
          </div>

          <div
            className="col-lg-3 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="my-4">Où sommes-nous ?</h4>

            <p className="mb-1">
              <i className="bi bi-home mr-2 footer-icon"></i>
              Tunis, Tunisie
            </p>
          </div>

          <div
            className="col-lg-4 mx-lg-auto text-center col-md-8 col-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="copyright-text">
              Copyright &copy; {new Date().getFullYear()} Docovery
            </p>
          </div>

          <div
            className="col-lg-4 mx-lg-auto col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <ul className="footer-link text-center">
              <li>
                <a href="#">Nous rejoindre</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>

          <div
            className="col-lg-3 mx-lg-auto col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <ul className="social-icon text-center">
              <li>
                <a href="#" className="bi bi-instagram"></a>
              </li>
              <li>
                <a href="#" className="bi bi-facebook"></a>
              </li>
              <li>
                <a href="#" className="bi bi-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
