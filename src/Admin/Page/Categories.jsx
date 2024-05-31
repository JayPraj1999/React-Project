import React from 'react'
import './Style.scss'
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function Categories() {
    return (
        <>
        <Header title="Categories"/>
            <form action="#">
                <table class="table" style={{ backgroundColor: '#FEF1EF' }}>
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Total services</th>
                            {/* <th scope="col">Amount(INR)</th> */}
                            {/* <th scope="col">Short Description</th> */}
                            <th scope="col">Image</th>
                           
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <th scope="row">1</th>
                            <td>Skin Care</td>
                            <td>5</td>
                            <td>400*</td>
                            <td>This is about Skin care productivity</td>
                            <td><img src="img/skin care.jpg" alt="" /></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Stram Bath</td>
                            <td>3</td>
                            <td>300*</td>
                            <td>This is about Skin Stream bath productivity</td>
                            <td><img src="img/streambath.jpg" alt="" /></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Body Massage</td>
                            <td>7</td>
                            <td>600*</td>
                            <td>This is about Body Massage productivity</td>
                            <td><img src="img/massage.jpg" alt="" /></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Hair Treatment</td>
                            <td>12</td>
                            <td>500*</td>
                            <td>This is about Face Making productivity</td>
                            <td><img src="img/Hair-Treatment.jpg" alt="" /></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Stone Masking</td>
                            <td>3</td>
                            <td>800*</td>
                            <td>This is about Stone productivity</td>
                            <td><img src="img/facial.png" alt="" /></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Manicure Pdicure</td>
                            <td>9</td>
                            <td>400*</td>
                            <td>This is about Manicure Pdicure productivity</td>
                            <td><img src="img/Manicure-Pedicures.jpg" alt="" /></td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Facial Tharapy</td>
                            <td>12</td>
                            <td>900*</td>
                            <td>This is about Facial Tharapy productivity</td>
                            <td><img src="img/skin care.jpg" alt="" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        <Footer />
        </>
    )
}

export default Categories;