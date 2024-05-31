import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import axios from 'axios';
import { toast } from 'react-toastify';


function Manage_blog() {


  const [data, setDate] = useState([]);

  useEffect(() => {
    fatch();
  });

  const fatch = async () => {
    const result = await axios.get('http://localhost:3000/blog');
    console.log(result.data);
    setDate(result.data);
  }

  const deletehandl = async (id) => {
    const result = await axios.delete(`http://localhost:3000/blog/${id}`);
    toast.success("Blog deleted successfully");
    fatch();
  }

  const [form, setForm] = useState({
    blog_title: '',
    amount: '',
    blog_image: ''
})

  // const [form, setForm] = useState({
  //   blog_title:"",
  //   blog_description:"",
  //   blog_image:""
  // })

  const edithandel = async (id) =>{
    const result = await axios.get(`http://localhost:3000/blog/${id}`);
    console.log(result.data);
    setForm(result.data);
    console.log(form.data);
}

  // const edithandel = async (id) => {
  //   const result = await axios.get(`http://localhost:3000/blog/${id}`);
  //   console.log(result.data);
  //   setForm(result.data);
  //   console.log(result.data);
  // }

  const changehandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
    console.log(form);
}

  // const changehandler = (e) =>{
  //   setForm({...form, [e.target.name]: e.target.value });
  //   console.log(form);
  // }

  const submithandler = async (e) => {
    e.preventDefault();
    const result = await axios.patch(`http://localhost:3000/blog/${form.id}`, form);
    setForm({...form, blog_title: "", blog_description: "", blog_image: ""});
    toast.success('blog Add success');
    fatch();
}

  // const submithanlde = async (e) =>{
  //   e.preventDefault();
  //   const result = await axios.patch(`http://localhost:3000/blog/${form.id}`,form);
  //   setForm({...form, blog_title:"", blog_description:"", blog_image:"",})
  //   toast.success('Blog updated successfully');
  //   fatch();
  // }


  return (
    <>

      <Header title="Manage Blog" />
      <table class="table" style={{ backgroundColor: '#FEF1EF' }} >
        <thead>
          <tr>
            <th scope="col">Blog id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((value, index, arr) => {
              return (
                <tr>
                  <td>{value.id}</td>
                  <td>{value.blog_title}</td>
                  <td>{value.blog_description}</td>
                  <td><img src={value.blog_image} width="50px"></img></td>
                  <td>
                    <button className='btn btn-info mr-2' data-toggle="modal" data-target="#myModal" onChange={()=> edithandel(value.id)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => deletehandl(value.id)}>Delete</button>
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
                <h4 className="modal-title">Edit Blog</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">

                <form method='post' name="sentMessage" >
                  <div className="form-row">
                    <div className="col-sm-12 control-group">
                      <input  name="blog_title" type="text" onChange={changehandler} value={form.blog_title} className="form-control border-0 p-4"  placeholder="Title" required="required" data-validation-required-message="Please enter blog title" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-12 control-group">
                      <input  name="blog_description" type="text" onChange={changehandler} value={form.blog_description } className="form-control border-0 p-4"  placeholder="Description" required="required" data-validation-required-message="Please enter Categories Images" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-12 control-group">
                      <input  name="blog_image" type="url" onChange={changehandler} value={form.blog_image}  className="form-control border-0 p-4"  placeholder="Blog Image" required="required" data-validation-required-message="Please enter Categories Images" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-4" onClick={submithandler} data-dismiss="modal" type="submit" id="sendMessageButton" >Submit</button>
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

export default Manage_blog;