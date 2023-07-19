import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          Docovery
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link smoothScroll">
                Acceuil
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link smoothScroll">
                A propos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Nos Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link contact">
                Nous Contacter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
