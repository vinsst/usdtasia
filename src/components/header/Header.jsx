import React, { useState, useEffect, useRef } from "react";
import GB from "../../assets/img/flags/GB.svg";
import arrow_down from "../../assets/img/arrow_down.svg";
import menuHamburger from "../../assets/img/menuHamburger.svg";
import profile from "../../assets/img/profile.svg";
import Login from "./Login";
import Registration from "./Registration";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [login, setLogin] = useState(false);
  const [registr, setRegistr] = useState(false);
  const [burger, setBurger] = useState(false);

  const loginRef = useRef(null);
  const registrRef = useRef(null);
  const burgerContentRef = useRef(null);

  const handleLoginClick = () => {
    setLogin(true);
    setRegistr(false);
    setBurger(false);
    document.body.classList.add("no-scroll");
  };

  const handleRegistrClick = () => {
    setRegistr(true);
    setLogin(false);
    setBurger(false);
    document.body.classList.add("no-scroll");
  };

  const handleCloseModals = () => {
    setLogin(false);
    setRegistr(false);
    setBurger(false);
    document.body.classList.remove("no-scroll");
  };

  const showBurger = () => {
    setBurger(!burger);
    setLogin(false);
    setRegistr(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        login &&
        loginRef.current &&
        !loginRef.current.contains(event.target)
      ) {
        handleCloseModals();
      }
      if (
        registr &&
        registrRef.current &&
        !registrRef.current.contains(event.target)
      ) {
        handleCloseModals();
      }
      if (
        burger &&
        burgerContentRef.current &&
        !burgerContentRef.current.contains(event.target)
      ) {
        handleCloseModals();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [login, registr, burger]);

  const loginTxt = useSelector((state) => state.loginReducer.login);
  console.log(loginTxt);
  return (
    <header>
      {login ? <Login loginRef={loginRef} close={handleCloseModals} /> : null}
      {registr ? (
        <Registration registrRef={registrRef} close={handleCloseModals} />
      ) : null}
      <div className="header_container container">
        <img
          src={menuHamburger}
          alt=""
          className="header_burger"
          onClick={showBurger}
        />
        <Link
          to="/
  "
          className="header_logo"
        >
          USDT<span className="header_logo2">ASIA</span>
        </Link>
        <nav className="header_groupNav">
          <Link to="/" className="groupNav_el">
            Home
          </Link>
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
          {loginTxt ? (
            <div className="group2_lang">
              <div className="loginTxtHeader">{loginTxt}</div>

              <img src={arrow_down} alt="" className="group2__lang_arr" />
            </div>
          ) : (
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
          )}
        </div>
        <img src={profile} alt="" className="header_profile" />
      </div>
      {burger ? (
        <Burger
          showBurger={showBurger}
          handleLoginClick={handleLoginClick}
          handleRegistrClick={handleRegistrClick}
          burgerContentRef={burgerContentRef}
        />
      ) : null}
    </header>
  );
}

export default Header;
