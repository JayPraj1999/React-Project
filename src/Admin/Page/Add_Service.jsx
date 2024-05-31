import React, { useState, useEffect } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';


function Add_Service() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  });
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/add_category`);
    console.log(res.data);
    setData(res.data)
  }


  const [form, setForm] = useState({

    category_name: '',
    service_name: '',
    amount: '',
    service_decription: '',
    service_image: ''

  })

  const changeHandel = (e) => {
    setForm({ ...form, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(form);
  }

  const submithandel = async (e) => {

    e.preventDefault(); // not page refresh
    const res = await axios.post(`http://localhost:3000/service`, form);
    setForm({ ...form, service_name: "", amount: "", service_decription: "", service_image: "" });
    toast.success('Services Add success');

  };

  return (
    <>
      <Header title="Add_Service" />
      <div className="container-fluid py-5" >

        <div className="row justify-content-center " style={{ backgroundColor: '#FEF1EF' }}>
          <div className="col-lg-6 py-5">
            <h1 className="text-black text-center mb-4" >Add Service</h1>
            <form method='post' onSubmit={submithandel}>
              <div className="form-row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input onChange={changeHandel} value={form.service_name} name="service_name" type="text" className="form-control bg-transparent p-4" placeholder="Service Name" required="required" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <select onChange={changeHandel} value={form.category_name} name="category_name" className="form-control bg-transparent p-2" placeholder="Category name"  style={{height: "48px"}}>
                      <option value="" selected disabled>----------- Select Categories -----------</option>
                      {
                        data && data.map((value, index, arr) => {
                          return (
                            <>
                              <option value={value.category_name}>{value.category_name}</option>

                            </>
                          )
                        })
                      }



                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input onChange={changeHandel} value={form.amount} type="text" name="amount" className="form-control bg-transparent p-4" placeholder="Amount" required="required" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="text" onChange={changeHandel} value={form.service_image} name="service_image" className="form-control bg-transparent p-4" placeholder='Enter Image Path' />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-12">
                  <div className="form-group">
                    {/* <input type="textarea" className="form-control bg-transparent p-4 datetimepicker-input" placeholder="Short Decription" data-target="#time" data-toggle="datetimepicker" /> */}
                    <textarea onChange={changeHandel} value={form.service_decription} name="service_decription" className="form-control bg-transparent p-4 datetimepicker-input" placeholder="Short Decription"></textarea>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-12">
                  <button className="btn btn-primary btn-block" type="submit" style={{ height: 47 }}>Add Sevice</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Add_Service;
