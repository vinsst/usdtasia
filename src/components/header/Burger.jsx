import React from "react";
import menuHamburger from "../../assets/img/menuHamburger.svg";
import GB from "../../assets/img/flags/GB.svg";
import arr_down from "../../assets/img/arrow_down.svg";

function Burger({ showBurger, handleLoginClick, handleRegistrClick }) {
  return (
    <div className="burgerActive_effects">
      <nav className="burgerActive">
        <div className="flex">
          <img
            src={menuHamburger}
            alt=""
            className="header_burger"
            width="32px"
            onClick={showBurger}
          />
          <div className="header_logo">
            USDT<span className="header_logo2">ASIA</span>
          </div>
        </div>
        <nav className="header_groupNav burgerShow_nav">
          <p className="groupNav_el">Home</p>
          <p className="groupNav_el">About</p>
          <p className="groupNav_el">Blog</p>
          <p className="groupNav_el">FAQ</p>
          <p className="groupNav_el">API</p>
          <p className="groupNav_el">Support</p>
        </nav>
        <div className="burger_flag">
          <img src={GB} alt="" className="group2__lang_flag" />
          <img src={arr_down} alt="" className="group2__lang_arr" />
        </div>
        <div className="burger__login_container">
          <button
            className="group2__registration_in burger_signIn"
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
      </nav>
    </div>
  );
}

export default Burger;
