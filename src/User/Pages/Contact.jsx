import React, { useEffect, useState } from 'react'
import Header2 from '../Components/Header2';
import Footer from '../Components/Footer';
import { toast } from 'react-toastify';
import axios from 'axios';

function Contact() {

    const [form, setForm] = useState({
      name: '',
      email: '',
      subject:'',
      comment:''
    })

    const changehandler = (e) =>{
        setForm({...form,id:new Date().getTime().toString(),[e.target.name]:[e.target.value]});
        console.log(form);
    }
    const submithandler = async (e) =>{
        e.preventDefault();
        const result = await axios.post('http://localhost:3000/contact', form);
        setForm({...form, name:"", email:"", subject:"",comment:""});
        toast.success('Message Send Successfully');
    }

  return (
    <>

      <Header2 title="Contact" />
      {/* Contact Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6" >
              <div className="position-relative h-100">
                <iframe className="position-absolute w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>
                <h1 className="mb-4">Contact For Any Query</h1>
                <div id="success" />
                <form name="sentMessage" id="contactForm" noValidate="novalidate" method='podt' onSubmit={submithandler}>
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                      <input type="text" onChange={changehandler} value={form.name} className="form-control border-0 p-4" name='name' id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-6 control-group">
                      <input type="email" onChange={changehandler} value={form.email} className="form-control border-0 p-4" name='email' id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <input type="text" onChange={changehandler} value={form.subject} className="form-control border-0 p-4" id="subject" name='subject' placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea onChange={changehandler} value={form.comment} className="form-control border-0 py-3 px-4" rows={3} id="message" name='comment' placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Send
                      Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      <Footer />

    </>
  )
}

export default Contact;