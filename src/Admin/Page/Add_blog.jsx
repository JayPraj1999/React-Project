import React, { useState } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

function Add_blog() {

    const[form, setForm] =  useState({
        blog_title: '',
        blog_image: '',
        blog_description: ''
    });

    const changehandl = (e) =>{
        setForm({...form,id:new Date().getTime().toString(), [e.target.name]:e.target.value});
        console.log(form);
    }

    const changeHandel = (e) => {
    setForm({ ...form, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(form);
  }
    const submithandl = async (e) =>{
        e.preventDefault();
        const result = await axios.post('http://localhost:3000/blog', form);
        setForm({...form, blog_title:"", blog_image:"", blog_description:""});
        toast.success('Blog Add success');
        console.log(result.data);
    }

    

    return (
        <>

            <Header title="Add_Blog" />
            <div className="container-fluid py-5" >

                <div className="row justify-content-center " style={{ backgroundColor: '#FEF1EF' }}>
                    <div className="col-lg-6 py-5">
                        <h1 className="text-black text-center mb-4" >Add New Blog</h1><br />
                        <form method='post' onSubmit={submithandl}>
                            <div className="form-row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <input  type="text" onChange={changehandl} value={form.blog_title} className="form-control bg-transparent p-4" placeholder="Title" name='blog_title' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <input  type="text" onChange={changehandl} value={form.blog_image} className="form-control bg-transparent p-4" placeholder="Copy Image Address" name='blog_image' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <textarea name="blog_description" onChange={changehandl} value={form.blog_description} id="" className="form-control bg-transparent p-4" placeholder='Enter Message'></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-sm-12">
                                    <button className="btn btn-primary btn-block" type="submit" style={{ height: 47 }}>Add Blog</button>
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

export default Add_blog;