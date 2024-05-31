import React, { useEffect, useState } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';




function Manage_Servicies() {

    const [data, setDate] = useState([]);

    useEffect(() => {
        fatch();
    });

    const fatch = async () => {

        const result = await axios.get('http://localhost:3000/service');
        console.log(result.data);
        setDate(result.data);
    }
    const deletehandl = async (id) => {
        const result = await axios.delete(`http://localhost:3000/service/${id}`);
        toast.success("Category deleted successfully");
        fatch();
    }

    const [form, setForm] = useState({
        service_name: "",
        amount: "",
        service_decription: "",
        service_image: ""
    })

    const edithandel = async (id) =>{
        const result = await axios.get(`http://localhost:3000/service/${id}`);
        console.log(result.data);
        setForm(result.data);
        console.log(form.data);
    }

    const changehandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
        console.log(form);
    }

    const submithandler = async (e) => {
        e.preventDefault();
        const result = await axios.patch(`http://localhost:3000/service/${form.id}`, form);
        setForm({...form, service_name: "", amount: "", service_decription: "", service_image: "" });
        toast.success('Services Add success');
        fatch();
    }

    return (


        <>
            <Header title="Manage_Services" />
           

                <table class="table" style={{ backgroundColor: '#FEF1EF' }}>
                    <thead>
                        <tr>
                            <th scope="col">Service ID</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((value, index, array) => {
                                return (
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>{value.category_name}</td>
                                        <td>{value.service_name}</td>
                                        <td>{value.amount}</td>
                                        <td>{value.service_decription}</td>
                                        <td><img src={value.service_image} width="100px" alt="" /></td>
                                        <td>
                                            <button type='button' className='btn btn-info mr-2' data-toggle="modal" data-target="#myModal" onClick={()=> edithandel(value.id)}>Update</button>
                                            <button type='button' onClick={() => deletehandl(value.id)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
        


        <div className="modal" id="myModal">
          <div className="modal-dialog" >
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Edit Service</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">

                <form method='post' name="sentMessage" >
                  <div className="form-row">
                    <div className="col-sm-12 control-group">
                      <input  name="service_name" onChange={changehandler} value={form.service_name} type="text" className="form-control border-0 p-4"  placeholder="Service Name" required="required" data-validation-required-message="Please enter Categories name" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-12 control-group">
                      <input  name="amount" onChange={changehandler} value={form.amount} type="number" className="form-control border-0 p-4"  placeholder="Amount" required="required" data-validation-required-message="Please enter Categories Images" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-12 control-group">
                      <input  name="service_decription" onChange={changehandler} value={form.service_decription} type="tex" className="form-control border-0 p-4"  placeholder="Service Description" required="required" data-validation-required-message="Please enter Categories Images" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-12 control-group">
                      <input  name="service_image" type="url" onChange={changehandler} value={form.service_image} className="form-control border-0 p-4"  placeholder="Service Image" required="required" data-validation-required-message="Please enter Categories Images" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>

                  <div>
                    <button className="btn btn-primary py-3 px-4"  data-dismiss="modal" type="submit" id="sendMessageButton" onClick={submithandler}>Submit</button>
                  </div>
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button"  className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
            <Footer />
        </>
    )
}

export default Manage_Servicies;