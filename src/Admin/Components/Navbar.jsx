import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            {/* Navbar Start */}
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <NavLink to="/Login" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 text-primary"><span className="text-dark">SPA</span> Center</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">

                        <div className="navbar-nav m-auto py-0">
                            <NavLink to="/dashboard" className="nav-item nav-link">Dashboard</NavLink>

                            <div className="nav-item dropdown">
                                <NavLink to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Category</NavLink>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/categories" className="dropdown-item">Categories</NavLink>
                                    <NavLink to="/add_categories" className="dropdown-item">Add_Categories</NavLink>
                                    <NavLink to="/manage_categories" className="dropdown-item">Manage_Categories</NavLink>
                                </div>
                            </div>

                            <div className="nav-item dropdown">
                                <NavLink to="#" className="nav-link dropdown-toggle " data-toggle="dropdown">Service</NavLink>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/servicies" className="dropdown-item">Servicies</NavLink>
                                    <NavLink to="/add_service" className="dropdown-item">Add_Servicies</NavLink>
                                    <NavLink to="/manage_servicies" className="dropdown-item">Manage_Servicies</NavLink>
                                </div>

                            </div>
                            <div className="nav-item dropdown">
                                <NavLink to="#" className="nav-link dropdown-toggle " data-toggle="dropdown">Blog</NavLink>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/add_blog" className="dropdown-item">Add_Blog</NavLink>
                                    <NavLink to="/manage_blog" className="dropdown-item">Manage_Blog</NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <NavLink to="#" className="nav-link dropdown-toggle " data-toggle="dropdown">Manage</NavLink>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/manage_contact" className="dropdown-item">Manage Contact</NavLink>
                                    <NavLink to="/manage_customer" className="dropdown-item">Manage Customer</NavLink>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/" className="btn btn-primary  d-lg-block">Logout</NavLink>
                        </div>
                </nav>
            </div>
            {/* Navbar End */}
        </>
    )
}

export default Navbar