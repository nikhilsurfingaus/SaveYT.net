import React from "react";
// import DownloadeForm from "../components/downloadeForm";
import Home from "../pages/Home";
import Help from "../pages/Help";
import Intsall from "../pages/Intsall";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Header'
import Footer from "../components/Footer";
import './Layout.css'

const Layout = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} exact/>
          <Route path="/home"  element={<Home/>} exact/>
          <Route path="/help" element={<Help/>} exact/>
          <Route path="/install" element={<Intsall/>} exact/>
        </Routes>
        <div className="Footy">
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default Layout;