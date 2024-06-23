import React, { useContext, useEffect } from 'react';
import  "./App.css";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
 import Navbar from './Components/Navbar';
import Login from "./Pages/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home"
import { Context } from './main';
import axios from 'axios';
import Footer from './Components/Footer';

const App = () => {
  
  const {isAuthenticated,
    setIsAuthenticated,
    setUser}=useContext(Context);

    useEffect(()=>{
      const fetchUser =async()=>{
        try{
          const response = await axios.get(
            "http://localhost:5000/api/v1.1/userrigister/patient/me",{
              withCredentials:true,
            }
          );
          setIsAuthenticated(true);
          setUser(response.data.user);
        }catch(error){
          setIsAuthenticated(false);
          setUser({});
        }
      };
      fetchUser();
    },[isAuthenticated]);

  return (
    <>
     <Router>    
     <Navbar/>  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/rigister' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      <ToastContainer position="top-center"/>
     </Router>
{/* </BrowserRouter> */}
    </>
  );
};

export default App;