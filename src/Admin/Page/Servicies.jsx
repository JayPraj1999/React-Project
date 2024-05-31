import React from 'react'
import './Style.scss'
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function Servicies() {
    return (
        <>
            <Header title="Services"/>  
            
            <form action='#'>
                <table class="table " style={{ backgroundColor: '#FEF1EF' }}>

                    <thead>
                    <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Sevice Name</th>
                            <th scope="col">Category ID</th>
                            <th scope="col">Amount(INR)</th>
                            <th scope="col">Dicount price(INR)</th>
                            <th scope="col">Short Description</th>
                            <th scope="col">Change Image</th>      
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </form>
        <Footer />
        </>
    )
}

export default Servicies;