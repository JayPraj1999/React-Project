import React from 'react'
import Navbar from './Navbar';

function Header2({title}) {
    return (
        <>
        <Navbar />
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid bg-jumbotron" style={{ marginBottom: 90 }}>
                <div className="container text-center py-5">
                    <h3 className="text-white display-3 mb-4">{title}</h3>
                </div>
            </div>
            {/* Header End */}

        </>
    )
}

export default Header2;