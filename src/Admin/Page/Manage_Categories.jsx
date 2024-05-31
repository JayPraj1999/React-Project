import React, { useEffect, useState } from 'react'
import './Style.scss'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';


function Manage_Categories() {

  const [data, setDate] = useState([]);

  useEffect(() => {
    fatch();
  });

  const fatch = async () => {
    const result = await axios.get('http://localhost:3000/add_category');
    console.log(result.data);
    setDate(result.data);
  }

  const deletehandl = async (id) => {
    const result = await axios.delete(`http://localhost:3000/add_category/${id}`);
    toast.success("Category deleted successfully");
    fatch();
  }

  const [form, setForm] = useState({
    category_name: "",
    category_image: ""
  })

  const edithandel = async (id) => {
    const result = await axios.get(`http://localhost:3000/add_category/${id}`);
    console.log(result.data);
    setForm(result.data);
}

  const changeHandel = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
}

  const submithandel = async (e) => {
        e.preventDefault(); // not page refresh
        const result = await axios.patch(`http://localhost:3000/add_category/${form.id}`, form);
        setForm({ ...form, category_name: "", category_image: "" });
        // document.getElementById('myModal').style.display="none";
        toast.success('Categories Update success'); 

}

  return (

    <>
      <Header title="Manage_Categories" />
      <form method='post'>
        <table class="table" style={{ backgroundColor: '#FEF1EF' }}>
          <thead>
            <tr>
              <th scope="col">Category id</th>
              <th scope="col">Category Name</th>
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
                    <td><img src={value.category_image} width="100px" alt="" /></td>
                    <td>
                      <button type="button" data-toggle="modal" data-target="#myModal" onClick={() => edithandel(value.id)} class="btn btn-info mr-2">Update</button>
                      <button type="button" onClick={() => deletehandl(value.id)} class="btn btn-danger ">Delete</button>
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
                <h4 className="modal-title">Edit Categories</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">

                <form method='post' name="sentMessage" id="contactForm" noValidate="novalidate">
                  <div className="form-row">
                    <div className="col-sm-12 control-group">
                      <input onChange={changeHandel} value={form.category_name} name="category_name" type="text" className="form-control border-0 p-4" id="name" placeholder="Categories Name" required="required" data-validation-required-message="Please enter Categories name" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-12 control-group">
                      <input onChange={changeHandel} value={form.category_image} name="category_image" type="url" className="form-control border-0 p-4" id="cate_img" placeholder="Categories Image" required="required" data-validation-required-message="Please enter Categories Images" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>

                  <div>
                    <button className="btn btn-primary py-3 px-4" onClick={submithandel} data-dismiss="modal" type="submit" id="sendMessageButton">Submit</button>
                  </div>
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </form>
      <Footer />
    </>
  )
}

export default Manage_Categories;