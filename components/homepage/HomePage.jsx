import React from "react";
import Image from "next/image";
export default function HomePage() {
  return (
    <section className="hero hero-bg d-flex justify-content-center align-items-center" id="homepage">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-text">
              <h1 className="text-white" data-aos="fade-up">
                Nous créons la solution qui repond à vos besoins
              </h1>

              <a
                href="#footer"
                className="custom-btn btn-bg btn mt-3"

              >
                Nous contacter
              </a>

            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="hero-image" data-aos="fade-up" data-aos-delay="300">
              <Image src="/test.png" alt="working girl" className="img-fluid" width={1060} height={885} priority={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
