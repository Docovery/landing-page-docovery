import React from "react";

export default function Services() {
  return (
    <section className="about section-padding pb-0" id="services">
      <div className="container">
        <div className="row">
          <h2 className="mb-4 text-center" data-aos="fade-up">
            Nos <strong>services</strong>
          </h2>
          <div className="container mt-5" data-aos="fade-up">
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="bi bi-person" aria-hidden="true"></i>

                <div className="title">
                  <h4>Accompagnement</h4>
                </div>

                <div className="text">
                  <span>
                  Nous vous accompagnons dans la clarification de votre idée pour mieux appréhender le cœur de votre projet.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="bi bi-pencil" aria-hidden="true"></i>

                <div className="title">
                  <h4>Conception</h4>
                </div>

                <div className="text">
                  <span>
                    Représenter son projet est une méthode efficace pour sa construction. Docovery se charge de vous aider à mieux conceptualiser votre projet.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="bi bi-code" aria-hidden="true"></i>

                <div className="title">
                  <h4>Dévéloppement</h4>
                </div>

                <div className="text">
                  <span>
                    {"L'équipe talentueuse de Docovery crée des solutions sur mesure pour votre projet."}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="bi bi-house" aria-hidden="true"></i>

                <div className="title">
                  <h4>Service après vente</h4>
                </div>

                <div className="text">
                  <span>
                    Un support continu est assuré par le service après-vente dédié, résolvant rapidement toute question ou préoccupation.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="bi bi-tools" aria-hidden="true"></i>

                <div className="title">
                  <h4>Maintenance</h4>
                </div>

                <div className="text">
                  <span>
                    Un service de maintenance proactif effectue des contrôles réguliers et applique les mises à jour nécessaires pour maintenir votre système en parfait état de fonctionnement.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="bi bi-book" aria-hidden="true"></i>

                <div className="title">
                  <h4>Formation</h4>
                </div>

                <div className="text">
                  <span>
                  Des formations personnalisées adaptées à vos besoins spécifiques vous permettent de maîtriser pleinement vos outils technologiques.
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}