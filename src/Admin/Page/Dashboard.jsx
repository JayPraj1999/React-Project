import React, { Suspense, lazy } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <>
    <Suspense fallback={<div><h1>Dashboard Page is loading.........</h1></div>}></Suspense>
      <Header title="Dashboard" />
      
         {/* This is All About React Outlet For neasted routing  */}

         <Link to="/dashboard/manage_servicies" >Manage_Service</Link><br />
                <Link to="/dashboard/manage_categories" >Manage_Categories</Link><br />
                <Link to="/dashboard/manage_blog" >Manage_Blog</Link><br />
                <Link to="/dashboard/manage_contact" >Manage_Contact</Link><br />
                <Link to="/dashboard/manage_customer" >Manage_Customer</Link><br />

                <Outlet />


      <div style={{textAlign:'center'}}><h1><u><i>View Appoinment </i></u></h1></div><br /><br />
      <form action="#">
        <table class="table" style={{ backgroundColor: '#FEF1EF' }}>
          <thead>
            <tr>
              <th scope="col">Booking #id </th>
              <th scope="col">Services Name</th>
              <th scope="col">Category Name</th>
              <th scope="col">Additional Requirement</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Comment</th>
              <th scope="col">Accept</th>
              <th scope="col">Denial</th>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Hair Removal</td>
              <td>Skin Care</td>
              <td>Need to do with gel</td>
              <td>400</td>
              <td>12-05-2024</td>
              <td>13:30</td>
              <td><input type='text' placeholder='Add Comment'></input></td>
              <td><input type='submit' value={"Accept Request"} className="btn btn-info"></input></td>
              <td><input type='submit' value={"Cancel Request"} className="btn btn-danger"></input></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Nail Art</td>
              <td>Manicure Pedicure</td>
              <td></td>
              <td>200</td>
              <td>15-05-2024</td>
              <td>11:30</td>
              <td><input type='text' placeholder='Add Comment'></input></td>
              <td><input type='submit' value={"Accept Request"} className="btn btn-info"></input></td>
              <td><input type='submit' value={"Cancel Request"} className="btn btn-danger"></input></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Hair Straigning</td>
              <td>Hair Treatment</td>
              <td>Use Natural shampoo</td>
              <td>600</td>
              <td>12-06-2024</td>
              <td>13:30</td>
              <td><input type='text' placeholder='Add Comment'></input></td>
              <td><input type='submit' value={"Accept Request"} className="btn btn-info"></input></td>
              <td><input type='submit' value={"Cancel Request"} className="btn btn-danger"></input></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Acupncture</td>
              <td>Body Massage</td>
              <td>Need full body relaxation</td>
              <td>900</td>
              <td>12-05-2024</td>
              <td>10:30</td>
              <td><input type='text' placeholder='Add Comment'></input></td>
              <td><input type='submit' value={"Accept Request"} className="btn btn-info"></input></td>
              <td><input type='submit' value={"Cancel Request"} className="btn btn-danger"></input></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Facial</td>
              <td>Facial Making</td>
              <td>Use lakme product</td>
              <td>300</td>
              <td>19-05-2024</td>
              <td>13:30</td>
              <td><input type='text' placeholder='Add Comment'></input></td>
              <td><input type='submit' value={"Accept Request"} className="btn btn-info"></input></td>
              <td><input type='submit' value={"Cancel Request"} className="btn btn-danger"></input></td>
            </tr>
            
          </thead>
          <tbody>
          </tbody>
        </table>
      </form>
      <Footer />

    </>
  )
}

export default Dashboard;