import React, { useState } from "react";
import GB from "../assets/img/flags/GB.svg";
import arrow_down from "../assets/img/arrow_down.svg";
import menuHamburger from "../assets/img/menuHamburger.svg";
import profile from "../assets/img/profile.svg";
import Login from "./Login";
import Registration from "./Registration";

function Header() {
  const [login, setLogin] = useState(false);
  const [registr, setRegistr] = useState(false);

  const handleLoginClick = () => {
    setLogin(!login);
    if (!login) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const handleRegistrClick = () => {
    setRegistr(!registr);
    if (!registr) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <header>
      {login ? <Login /> : <></>}
      {registr ? <Registration /> : <></>}
      <div className="header_container container">
        <img src={menuHamburger} alt="" className="header_burger" />
        <div className="header_logo">
          USDT<span className="header_logo2">ASIA</span>
        </div>
        <nav className="header_groupNav">
          <p className="groupNav_el">Home</p>
          <p className="groupNav_el">About</p>
          <p className="groupNav_el">Blog</p>
          <p className="groupNav_el">FAQ</p>
          <p className="groupNav_el">API</p>
          <p className="groupNav_el">Support</p>
        </nav>
        <div className="header_group2">
          <div className="group2_lang">
            <img src={GB} alt="" className="group2__lang_flag" />
            <img src={arrow_down} alt="" className="group2__lang_arr" />
          </div>
          <div className="group2_registration">
            <button
              className="group2__registration_in"
              onClick={handleLoginClick}
            >
              Sign in
            </button>
            <button
              className="group2__registration_up"
              onClick={handleRegistrClick}
            >
              Sign up
            </button>
          </div>
        </div>
        <img src={profile} alt="" className="header_profile" />
      </div>
    </header>
  );
}

export default Header;
