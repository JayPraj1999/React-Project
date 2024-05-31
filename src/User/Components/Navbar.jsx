import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <>
          <div className="container-fluid p-0">
              <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                  <NavLink to="/" className="navbar-brand ml-lg-3">
                      <h1 className="m-0 text-primary"><span className="text-dark">SPA</span> Center</h1>
                  </NavLink>
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                      <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                      <div className="navbar-nav m-auto py-0">
                          <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                          <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                          <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
                          <NavLink to="/pricing" className="nav-item nav-link">Pricing</NavLink>
                          <div className="nav-item dropdown">
                              <NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</NavLink>
                              <div className="dropdown-menu rounded-0 m-0">
                                  <NavLink to="/appointment" className="dropdown-item">Appointment</NavLink>
                                  <NavLink to="/opening" className="dropdown-item">Open Hours</NavLink>
                                  <NavLink to="/" className="dropdown-item">Our Team</NavLink>
                                  <NavLink to="/testimonials" className="dropdown-item">Testimonial</NavLink>
                              </div>
                          </div>
                          <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                      </div>
                      <NavLink to="/login" className="btn btn-primary d-none d-lg-block">Login</NavLink>
                  </div>
              </nav>
          </div>
    </>
  )
}

export default Navbar;