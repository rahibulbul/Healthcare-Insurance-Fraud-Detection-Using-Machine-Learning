import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/home/Home";
import About from "./components/main/about/About";
import Services from "./components/main/services/Services";
import GetQuote from "./components/main/get-quote/GetQuote";
import Payment from "./components/main/payment/Payment";
import Shop from "./components/main/shop/Shop";
import Header from "./components/main/header/Header";
import Footer from "./components/main/footer/Footer";
import Login from "./components/main/login/Login";
import Registration from "./components/main/registration/Registration";
import Forgot from "./components/main/forgot/Forgot";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<Forgot />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
