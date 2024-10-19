import React, { useState, useEffect, useRef } from "react";
import GB from "../../assets/img/flags/GB.svg";
import arrow_down from "../../assets/img/arrow_down.svg";
import menuHamburger from "../../assets/img/menuHamburger.svg";
import profile from "../../assets/img/profile.svg";
import Login from "./Login";
import Registration from "./Registration";
import Burger from "./Burger";
import TruncateText from "./TruncateText";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

import axios from "axios";

import { useDispatch } from "react-redux";
import { addLogin, removeLogin } from "../../redux/actions";
import LangDrop from "./LangDrop";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
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

  // логіка для сесії логіну (при оновлені ст, щоб логін вже був виконан)

  const dispatch = useDispatch();

  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      axios
        .get(
          `https://usdtasia-back-8a0cb4592177.herokuapp.com/user/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            const userData = response.data;
            dispatch(addLogin(userData.login));
          }
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
        });
    }
  }, [dispatch]);

  const logout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    dispatch(removeLogin());
  };

  // dropdown

  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogin = async (login, password) => {
    const loginData = { login, password };
    try {
      const response = await axios.post(
        "https://usdtasia-back-8a0cb4592177.herokuapp.com/user/auth/login",
        loginData
      );

      if (response.status === 200) {
        const token = response.data;
        localStorage.setItem("authToken", token);

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        const userResponse = await axios.get(
          `https://usdtasia-back-8a0cb4592177.herokuapp.com/user/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (userResponse.status === 200) {
          dispatch(addLogin(userResponse.data.login));
        }
      }
    } catch (error) {
      console.error("Login after registration failed:", error);
    }
  };

  const [langDrop, setLangDrop] = useState(false);

  const showDropLang = () => {
    setLangDrop(!langDrop);
  };

  return (
    <header>
      {login ? (
        <Login
          loginRef={loginRef}
          close={handleCloseModals}
          handleRegistrClick={handleRegistrClick}
        />
      ) : null}
      {registr ? (
        <Registration
          registrRef={registrRef}
          close={handleCloseModals}
          handleLogin={handleLogin}
        />
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
          <p className="groupNav_el">Blog</p>
          {token ? (
            <Link to="/history" className="groupNav_el">
              History
            </Link>
          ) : (
            <p className="groupNav_el" onClick={handleLoginClick}>
              History
            </p>
          )}
          <p className="groupNav_el">FAQ</p>
          <p className="groupNav_el">API</p>
          <p className="groupNav_el">Support</p>
        </nav>
        <div className="header_group2">
          <div className="group2_lang" onClick={showDropLang}>
            <img src={GB} alt="" className="group2__lang_flag" />
            <img src={arrow_down} alt="" className="group2__lang_arr" />
            {langDrop && <LangDrop />}
          </div>
          {loginTxt ? (
            <div
              className="loginTxtHeader_conyForDropdown"
              onClick={showDropdown}
            >
              <div className="group2_lang loginHeaderTxt_container">
                <div className="loginTxtHeader">
                  <TruncateText text={loginTxt} maxLength={7} />
                </div>
                <img src={arrow_down} alt="" className="group2__lang_arr" />
                {dropdown && (
                  <div
                    className="quick__curency_dropdown quick__curency_dropdown_header"
                    onClick={logout}
                  >
                    <div className="quick__curency_dropdown_item">Log out</div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="group2_registration">
              <button
                className="group2__registration_in"
                onClick={handleLoginClick}
              >
                {t("SignIn")}
              </button>
              <button
                className="group2__registration_up"
                onClick={handleRegistrClick}
              >
                {t("SignUp")}
              </button>
            </div>
          )}
        </div>
        <img
          src={profile}
          alt=""
          className="header_profile"
          onClick={showBurger}
        />
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
