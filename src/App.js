import Footer from "./User/Components/Footer";
import Header from "./User/Components/Header";
import Header2 from "./User/Components/Header2";
import About from "./User/Pages/About";
import Home from "./User/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./User/Pages/Services";
import Pricing from "./User/Pages/Pricing";
import Contact from "./User/Pages/Contact";
import Appointment from "./User/Pages/Appointment";
import Open from "./User/Pages/Open";
import Team from "./User/Pages/Team";
import Testimonials from "./User/Pages/Testimonials";
import Login from "./Admin/Page/Login";
import Servicies from "./Admin/Page/Servicies";
import Categories from "./Admin/Page/Categories";
import Add_Service from "./Admin/Page/Add_Service";
import Manage_Categories from "./Admin/Page/Manage_Categories";
import Add_Categories from "./Admin/Page/Add_Categories";
import Manage_Servicies from "./Admin/Page/Manage_Servicies";
import Dashboard from "./Admin/Page/Dashboard";
import Registration from "./Admin/Page/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Add_blog from "./Admin/Page/Add_blog";
import Manage_blog from "./Admin/Page/Manage_blog";
import Manage_contact from "./Admin/Page/Manage_contact";
import Manage_Customer from "./Admin/Page/Manage_Customer";





function App() {
  return (
    <>

    {/* Routing */}

      <BrowserRouter>
      <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} > 
            {/* <Route path="/services/pricing" element={<Pricing />}></Route>               Child Router and Outlet */}
            {/* <Route path="/services/about" element={<About />}></Route>
            <Route path="/services/contact" element={<Contact />}></Route> */}
          </Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} /> 
          <Route path="/opening" element={<Open />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />


            {/* Admin */}

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/manage_servicies" element={<Manage_Servicies/>} />
            <Route path="/dashboard/manage_categories" element={<Manage_Categories/>} />
            <Route path="/dashboard/manage_blog" element={<Manage_blog/>} />
            <Route path="/dashboard/manage_contact" element={<Manage_contact />} />
            <Route path="/dashboard/manage_customer" element={<Manage_Customer />} />
         </Route>

          <Route path="/login" element={<Login/>  } />
          <Route path="registration" element={<Registration />} />
          <Route path="/servicies" element={<Servicies/>} />
          <Route path="/add_service" element={<Add_Service/>} />
          <Route path="/manage_servicies" element={<Manage_Servicies/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/add_categories" element={<Add_Categories/>} />
          <Route path="/manage_categories" element={<Manage_Categories/>} />
          <Route path="/add_blog" element={<Add_blog/>} />
          <Route path="/manage_blog" element={<Manage_blog/>} />
          <Route path="manage_contact" element={<Manage_contact />} />
          <Route path="/manage_customer" element={<Manage_Customer />} />
    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import Navbar from "./Admin/Components/Navbar";
// import Add_Categories from "./Admin/Page/Add_Categories";
// import Add_Service from "./Admin/Page/Add_Service";
// import Categories from "./Admin/Page/Categories";
// import Login from "./Admin/Page/Login";
// import Manage_Categories from "./Admin/Page/Manage_Categories";
// import Manage_Servicies from "./Admin/Page/Manage_Servicies";
// import Registration from "./Admin/Page/Registration";
// import Servicies from "./Admin/Page/Servicies";
// import Header from "./Admin/Components/Header";

// function App() {
//     return (
//       <>
//       {/* <Navbar /> */}
//           {/* <Login /> */}
//           {/* <Registration /> */}
//           {/* <Add_Service /> */}
//           {/* <Add_Categories /> */}
//           {/* <Manage_Categories /> */}
//           {/* <Manage_Servicies /> */}
//           {/* <Servicies /> */}
//           {/* <Categories /> */}
//           {/* <Header /> */}

//       </>
  //   );
  // }
  
  // export default App;


  
