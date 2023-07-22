import React from 'react'
import Image from 'next/image'

export default function Testimonials() {

    
  return (
    <section className="testimonial section-padding">
          <div className="container">
               <div className="row">

                    <div className="col-lg-6 col-md-5 col-12">
                        <div className="client-image" data-aos="fade-up">
                          <Image src="/male-avatar.png" className="img-fluid w-75 h-75" alt="website" width={916} height={836} />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-7 col-12">
                      <h4 className="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">Client satisfait </h4>

                      <div className="quote" data-aos="fade-up" data-aos-delay="200"></div>

                      <h5 className="mb-4" data-aos="fade-up" data-aos-delay="300">{"Je suis absolument ravi de l'application développée par Docovery ! C'est exactement ce que je cherchais. L'interface est conviviale et intuitive, rendant l'utilisation de l'application simple et agréable. Encore une fois, un grand merci pour cette expérience client remarquable !"}</h5>

                      <p data-aos="fade-up" data-aos-delay="400">
                        <strong>John Doe</strong>

                        <span className="mx-1">/</span>

                        <small>Amani (CEO)</small>
                      </p>
                    </div>

               </div>
          </div>
     </section>
  )
}
