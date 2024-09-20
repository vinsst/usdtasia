import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Decorations from "./components/Decorations";
import Home from "./pages/Home";
import Zayavka from "./pages/Zayavka";
import Zayavka2 from "./pages/Zayavka2";
import History from "./pages/History";

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
          <Route path="/history" element={<History />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
