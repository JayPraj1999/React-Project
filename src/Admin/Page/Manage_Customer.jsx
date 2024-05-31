import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Manage_customer() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user`);
        console.log(res.data);
        setData(res.data)
    }

    

    const deletehandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`);
        toast.success('User Delete success');
    }

    return (
        <div>
            <Header title="Manage Customer"/>
            < div className="container-fluid" >
                    <div className="row">
                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Customer</h6>
                                <h1 className="mb-4">Manage Customer</h1>
                                <div id="success" />

                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Adress</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            data && data.map((value, index, arr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.name}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.number}</td>
                                                        <td>{value.address}</td>
                                                        <td>
                                                            <button className='btn btn-info mr-2' >Edit</button>
                                                            <button className='btn btn-danger' onClick={()=>deletehandel(value.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div >

            <Footer />
        </div>
    )
}

export default Manage_customer;