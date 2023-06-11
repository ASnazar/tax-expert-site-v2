import './index.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Vanta from "./components/Vanta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-us/AboutUs";
import Services from "./pages/services/Services";
import React from "react";
import Contact from "./pages/contact/Contact";


function App() {


    return (
        <div >

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
                <Vanta/>
            </BrowserRouter>

        </div>
    );
}

export default App;
