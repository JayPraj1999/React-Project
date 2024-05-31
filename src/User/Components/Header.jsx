import React from 'react'
import Navbar from './Navbar';

function Header() {
    return (
        <>
            <Navbar />
            {/* Carousel Start */}
            <div className="container-fluid p-0 mb-5 pb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to={0} className="active" />
                        <li data-target="#header-carousel" data-slide-to={1} />
                        <li data-target="#header-carousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item position-relative active" style={{ minHeight: '100vh' }}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{ objectFit: 'cover' }} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{ letterSpacing: 3 }}>Spa &amp; Beauty Center</h6>
                                    <h3 className="display-3 text-capitalize text-white mb-3">Massage Treatment</h3>
                                    <p className="mx-md-5 px-5">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam</p>
                                    <a className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Make Appointment</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" style={{ minHeight: '100vh' }}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{ objectFit: 'cover' }} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{ letterSpacing: 3 }}>Spa &amp; Beauty Center</h6>
                                    <h3 className="display-3 text-capitalize text-white mb-3">Facial Treatment</h3>
                                    <p className="mx-md-5 px-5">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam</p>
                                    <a className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Make Appointment</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" style={{ minHeight: '100vh' }}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{ objectFit: 'cover' }} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{ letterSpacing: 3 }}>Spa &amp; Beauty Center</h6>
                                    <h3 className="display-3 text-capitalize text-white mb-3">Cellulite Treatment</h3>
                                    <p className="mx-md-5 px-5">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam</p>
                                    <a className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Make Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}

        </>
    )
}

export default Header;