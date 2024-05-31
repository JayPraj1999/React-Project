import React from 'react'
import Header2 from '../Components/Header2';
import Footer from '../Components/Footer';

function Testimonials() {
  return (
    <>

      <Header2 title="Testimonials" />
      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 pb-5 pb-lg-0">
              <img className="img-fluid w-100" src="img/testimonial.jpg" alt />
            </div>
            <div className="col-lg-6">
              <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">Testimonial</h6>
              <h1 className="mb-4">What Our Clients Say!</h1>
              <div className="owl-carousel testimonial-carousel">
                <div className="position-relative">
                  <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} />
                  <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" style={{ width: 60, height: 60 }} alt />
                    <div className="ml-3">
                      <h6 className="text-uppercase">Client Name</h6>
                      <span>Profession</span>
                    </div>
                  </div>
                  <p className="m-0">Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
                </div>
                <div className="position-relative">
                  <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} />
                  <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" style={{ width: 60, height: 60 }} alt />
                    <div className="ml-3">
                      <h6 className="text-uppercase">Client Name</h6>
                      <span>Profession</span>
                    </div>
                  </div>
                  <p className="m-0">Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
                </div>
                <div className="position-relative">
                  <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{ top: '-6px', right: 0 }} />
                  <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" style={{ width: 60, height: 60 }} alt />
                    <div className="ml-3">
                      <h6 className="text-uppercase">Client Name</h6>
                      <span>Profession</span>
                    </div>
                  </div>
                  <p className="m-0">Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam  sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      <Footer />

    </>
  )
}

export default Testimonials;