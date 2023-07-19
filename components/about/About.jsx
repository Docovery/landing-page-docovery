import React from 'react'
import Image from 'next/image'

export default function About() {
    
  return (
    <section className="about section-padding pb-0" id="about">
          <div className="container">
               <div className="row">

                    <div className="col-lg-7 mx-auto col-md-10 col-12">
                         <div className="about-info">

                              <h2 className="mb-4 text-center" data-aos="fade-up">A propos de <strong>Docovery</strong></h2>

                              <p className="mb-0" data-aos="fade-up">Docovery est une entreprise qui offre des services en <strong>développement informatique</strong>. Nous croyons que la technologie peut être utilisée pour améliorer la vie des gens et des entreprises, et nous sommes déterminés à aider nos clients à atteindre leurs objectifs grâce à <strong>nos compétences</strong> et notre <strong>expertise</strong>. Nous sommes spécialisés dans la création des solutions informatiques et nous proposons également des formations pour aider nos clients à mieux comprendre et à utiliser leur technologie. Nous sommes fiers de notre engagement envers la qualité et la satisfaction de nos clients.</p>
                         </div>

                         <div className="about-image" data-aos="fade-up" data-aos-delay="200">
                          <Image src="/office.png" className="img-fluid" alt="office" width={1377} height={678} />
                        </div>
                    </div>

               </div>
          </div>
    </section>
  )
}
