import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image src="/docovery_white.png" alt="logo" className="logo" width={100} height={100} />
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
                Accueil
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
