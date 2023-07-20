import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className="container cont-team">
      <div className="row team-items">
        <h2 className="mb-5 text-center" data-aos="fade-up">
          {"L'équipe"} <strong>Docovery</strong>
        </h2>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-80">
          <div className="card bg-white  d-flex align-items-center justify-content-center ">
            <div className="w-100">
              <Image
                src="/avatar.jpg"
                alt=""
                width={500}
                height={500}
                className="rounded-circle"
              />
            </div>
            <div className="text-center ">
              <p className="name">David BANITONGWA</p>
              <p className="job">Software Engineer & Co-founder Docovery</p>
              <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                <li className="icon">
                  <span className="bi bi-twitter"></span>
                </li>
                <li className="icon mx-2">
                  <span className="bi bi-facebook"></span>
                </li>
                <li className="icon ">
                  <span className="bi bi-instagram"></span>
                </li>
              </ul>
              <p className="dis pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-80">
          <div className="card bg-white  d-flex align-items-center justify-content-center">
            <div className="w-100">
              <Image
                src="/avatar.jpg"
                alt=""
                width={500}
                height={500}
                className="rounded-circle"
              />
            </div>
            <div className="text-center ">
              <p className="name">Omari KAYUMBA</p>
              <p className="job">Software Engineer & Co-founder Docovery</p>
              <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                <li className="icon">
                  <span className="bi bi-twitter"></span>
                </li>
                <li className="icon mx-2">
                  <span className="bi bi-facebook"></span>
                </li>
                <li className="icon ">
                  <span className="bi bi-instagram"></span>
                </li>
              </ul>
              <p className="dis pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
