import React from "react";
import Image from "next/image";
import socialTeam from "@/utils/socialTeam";

export default function Team() {
  return (
    <div className="container cont-team mb-5">
      <div className="row justify-content-center team-items">
        <h2 className="mb-5 text-center" data-aos="fade-up">
          {"L'équipe"} <strong>Docovery</strong>
        </h2>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-80">
          <div className="card bg-white d-flex align-items-center justify-content-center ">
            <div className="w-100">
              <Image
                src="/david.png"
                alt=""
                width={500}
                height={500}
                className="rounded-circle"
              />
            </div>
            <div className="text-center p-4">
              <p className="name">David BANITONGWA</p>
              <p className="job">Software Engineer & Co-founder Docovery</p>
              <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                <li className="icon">
                  <a href={socialTeam.david.twitter}>
                    <span className="bi bi-twitter"></span>
                  </a>
                </li>
                <li className="icon mx-2">
                  <a href={socialTeam.david.github}>
                    <span className="bi bi-github"></span>
                  </a>
                </li>
                <li className="icon ">
                  <a href={socialTeam.david.linkedin}>
                    <span className="bi bi-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-80">
          <div className="card bg-white  d-flex align-items-center justify-content-center">
            <div className="w-100">
              <Image
                src="/omari.jpg"
                alt=""
                width={500}
                height={500}
                className="rounded-circle"
              />
            </div>
            <div className="text-center p-4">
              <p className="name">Omari KAYUMBA</p>
              <p className="job">Software Engineer & Co-founder Docovery</p>
              <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                <li className="icon">
                  <a href={socialTeam.omari.twitter}>
                    <span className="bi bi-twitter"></span>
                  </a>
                </li>
                <li className="icon mx-2">
                  <a href={socialTeam.omari.github}>
                    <span className="bi bi-github"></span>
                  </a>
                </li>
                <li className="icon ">
                  <a href={socialTeam.omari.linkedin}>
                    <span className="bi bi-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
