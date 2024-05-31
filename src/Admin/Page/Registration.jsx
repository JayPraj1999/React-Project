import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';


function Registration() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        number: '',
        address: '',
        password: '',
        confirm_password: ''
    },[]);

    const changehandler = (e) =>{
        setForm({...form,id:new Date().getTime().toString(),[e.target.name]:[e.target.value]});
        console.log(form);
    }
    const submithandler = async (e) =>{
        e.preventDefault();
        const result = await axios.post('http://localhost:3000/user', form);
        setForm({...form, name:"", email:"", number:"",addess:"",password:"",confirm_password:"",});
        toast.success('Registration Done');
    }

    return (
        <>


            <section className="vh-auto" style={{ backgroundColor: '#eee' }}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-1">Sign up</p>
                                            <form className="mx-1 mx-md-2" method='post'>
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="text" onChange={changehandler} value={form.name} id="form3Example1c" className="form-control" name='name'/>
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="email" onChange={changehandler} value={form.email} id="form3Example3c" className="form-control" name='email'/>
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                    <i className="fas fa-mobile fa-lg me-3 fa-fw" />
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="number" onChange={changehandler} value={form.number} id="form3Example3c" className="form-control" name='number'/>
                                                        <label className="form-label" htmlFor="form3Example3c">Mobile Number</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                    <i className="fas fa-home fa-lg me-3 fa-fw" />
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="text" onChange={changehandler} value={form.address} id="form3Example3c" className="form-control" name='address'/>
                                                        <label className="form-label" htmlFor="form3Example3c">Your Address</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="password" onChange={changehandler} value={form.password} id="form3Example4c" className="form-control" name='password'/>
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>
                                                
                                                <div className="d-flex flex-row align-items-center mb-2">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input type="password" onChange={changehandler} value={form.confirm_password} id="form3Example4cd" className="form-control" name='confirm_password'/>
                                                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    {/* <input className="form-check-input me-10" type="checkbox" defaultValue id="form2Example3c" style={{marginLeft: '120px' }} /> */}
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        I agree all statements in  <a href="#!">Terms of service</a> after click on register button.
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    
                                                        <button type="button" onClick={submithandler} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                                    
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="img//service-5.jpg" className="img-fluid" alt="Sample image" style={{ borderRadius: '1rem', height: '90%', width: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Registration;