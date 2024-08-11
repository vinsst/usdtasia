import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Decorations from "./components/Decorations";
import Home from "./pages/Home";
import Zayavka from "./pages/Zayavka";
import Zayavka2 from "./pages/Zayavka2";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Decorations />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zayavka" element={<Zayavka />} />
          <Route path="/zayavka2" element={<Zayavka2 />} />
          {/*<Route path="/restore" element={<Restore />} />
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
