import React, {useRef, useState} from "react";
import Image from "next/image";

export default function Navbar() {
  const toggle = useRef()
  const [iconDisplay, setIconDisplay] = useState(false)

  const handleShow = () => {
    toggle.current.classList.toggle("show")
    if(toggle.current.classList.contains("show")) {
      setIconDisplay(true)
    } else {
      setIconDisplay(false)
    }
  }


  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image src="/docovery_white.png" alt="logo" className="logo" width={18786} height={8334} priority={true} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleShow}
        >
          {
            iconDisplay ? (<i class="bi bi-x-lg"></i>) : (<i class="bi bi-list"></i>)
          }
        </button>

        <div ref={toggle} className="collapse navbar-collapse" id="navbarNav">
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
              <a href="mailto:docovery@outlook.com" className="nav-link contact">
                Nous Contacter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
