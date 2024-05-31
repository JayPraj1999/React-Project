import React from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer'

function Pricing() {
  return (
    <>
      <Header2 title="Pricing" />
      {/* Pricing Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100" src="img/pricing.jpg" style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-lg-7 pt-5 pb-lg-5">
              <div className="pricing-text bg-light p-4 p-lg-5 my-lg-5">
                <div className="owl-carousel pricing-carousel">
                  <div className="bg-white">
                    <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                      <h1 className="display-4 mb-0">
                        <small className="align-top text-muted font-weight-medium" style={{ fontSize: 22, lineHeight: 45 }}>$</small>49<small className="align-bottom text-muted font-weight-medium" style={{ fontSize: 16, lineHeight: 40 }}>/Mo</small>
                      </h1>
                      <h5 className="text-primary text-uppercase m-0">Basic Plan</h5>
                    </div>
                    <div className="p-4">
                      <p><i className="fa fa-check text-success mr-2" />Full Body Massage</p>
                      <p><i className="fa fa-check text-success mr-2" />Deep Tissue Massage</p>
                      <p><i className="fa fa-check text-success mr-2" />Hot Stone Massage</p>
                      <p><i className="fa fa-check text-success mr-2" />Tissue Body Polish</p>
                      <p><i className="fa fa-check text-success mr-2" />Foot &amp; Nail Care</p>
                      <a href className="btn btn-primary my-2">Order Now</a>
                    </div>
                  </div>
                  <div className="bg-white">
                    <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                      <h1 className="display-4 mb-0">
                        <small className="align-top text-muted font-weight-medium" style={{ fontSize: 22, lineHeight: 45 }}>$</small>99<small className="align-bottom text-muted font-weight-medium" style={{ fontSize: 16, lineHeight: 40 }}>/Mo</small>
                      </h1>
                      <h5 className="text-primary text-uppercase m-0">Family Plan</h5>
                    </div>
                    <div className="p-4">
                      <p><i className="fa fa-check text-success mr-2" />Full Body Massage</p>
                      <p><i className="fa fa-check text-success mr-2" />Deep Tissue Massage</p>
                      <p><i className="fa fa-check text-success mr-2" />Hot Stone Massage</p>
                      <p><i className="fa fa-check text-success mr-2" />Tissue Body Polish</p>
                      <p><i className="fa fa-check text-success mr-2" />Foot &amp; Nail Care</p>
                      <a href className="btn btn-primary my-2">Order Now</a>
                    </div>
                  </div>
                  <div className="bg-white">
                    <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                      <h1 className="display-4 mb-0">
                        <small className="align-top text-muted font-weight-medium" style={{ fontSize: 22, lineHeight: 45 }}>$</small>149<small className="align-bottom text-muted font-weight-medium" style={{ fontSize: 16, lineHeight: 40 }}>/Mo</small>
                      </h1>
                      <h5 className="text-primary text-uppercase m-0">VIP Plan</h5>
                    </div>
                    <div className="p-4">
                      <p><i className="fa fa-check text-success mr-2" />Full Body Massage</p>
                      <p><i className="fa fa-check text-success mr-2" />Deep Tissue Massage</p>
                      <p><i className="fa fa-check text-success mr-2" />Hot Stone Massage</p>
                      <p><i className="fa fa-check text-success mr-2" />Tissue Body Polish</p>
                      <p><i className="fa fa-check text-success mr-2" />Foot &amp; Nail Care</p>
                      <a href className="btn btn-primary my-2">Order Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing End */}

      <Footer />
    </>
  )
}

export default Pricing