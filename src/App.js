import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sparkles from "./assets/img/Sparkles.svg";
import coin from "./assets/img/coin.svg";
import bck from "./assets/img/bck.png";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <div className="decorations">
          <div className="sparkles">
            <img src={Sparkles} alt="" className="sparkles_el1 sparkles_el" />
            <img src={Sparkles} alt="" className="sparkles_el2 sparkles_el" />
            <img src={Sparkles} alt="" className="sparkles_el3 sparkles_el" />
            <img src={Sparkles} alt="" className="sparkles_el4 sparkles_el" />
          </div>
          <div className="coins">
            <img src={coin} alt="" className="coins_el1 coins_el" />
            <img src={coin} alt="" className="coins_el2 coins_el" />
          </div>
          <img src={bck} alt="" className="bck" />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/restore" element={<Restore />} />
          <Route path="/my-services/add-service" element={<AddService />} />
          <Route path="/my-services/view-service" element={<ViewService />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/calendar/add-calendar" element={<AddCalendar />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
