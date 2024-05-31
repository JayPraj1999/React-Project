import React, { useState } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';


function Add_Categories() {

    const [form, setForm] = useState({
        category_name: '',
        category_image: ''
    })

    const changehandler = (e) =>{
        setForm({...form,id:new Date().getTime().toString(),[e.target.name]:[e.target.value]});
        console.log(form);
    }
    const submithandler = async (e) =>{
        e.preventDefault();
        const result = await axios.post('http://localhost:3000/add_category', form);
        setForm({...form, category_name:"", category_image:""});
        toast.success('Category added successfully');
    }

    return (
        <>
            <Header title="Add_Categories" />
            <div className="container-fluid py-5" >
                <div className="row justify-content-center " style={{ backgroundColor: '#FEF1EF' }}>
                    <div className="col-lg-6 py-5">
                        <h1 className="text-black text-center mb-4" >Add Category</h1><br />
                        <form method='post' onSubmit={submithandler}>
                            <div className="form-row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <input onChange={changehandler} value={form.category_name} type="text" className="form-control bg-transparent p-4" placeholder="Category Name" name='category_name' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <input onChange={changehandler} value={form.category_image} type="text" className="form-control bg-transparent p-4" placeholder="Copy Image Address" name='category_image' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-6">

                                </div>
                                <div className="col-sm-12">
                                    <button className="btn btn-primary btn-block" type="submit" style={{ height: 47 }}>Add Category</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br /><br />
            <Footer />
        </>
    )
}

export default Add_Categories;