import React from "react";

export default function Services() {
  return (
    <section className="about section-padding pb-0" id="about">
      <div className="container">
        <div className="row">
          <h2 className="mb-4 text-center" data-aos="fade-up">
            Nos <strong>services</strong>
          </h2>
          <div className="container d-flex mt-5">
            <div className="card">
              <div className="header">
                <i className="bi bi-database"></i>
              </div>
              <div className="body w-25">
                Lorem ipsum dolor sit amet consectetur adipisicing consectetur
                adipisicing
              </div>
            </div>
            <div className="card">
              <div className="header">
                <i className="bi bi-person-workspace"></i>
              </div>
              <div className="body w-25">
                Lorem ipsum dolor sit amet consectetur adipisicing consectetur
                adipisicing
              </div>
            </div>
            <div className="card">
              <div className="header">
                <i className="bi bi-code"></i>
              </div>
              <div className="body w-25">
                Lorem ipsum dolor sit amet consectetur adipisicing consectetur
                adipisicing
              </div>
            </div>
            <div className="card">
              <div className="header">
                <i className="bi bi-cloud-upload"></i>
              </div>
              <div className="body w-25">
                Lorem ipsum dolor sit amet consectetur adipisicing consectetur
                adipisicing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
