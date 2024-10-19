import React, { useState } from "react";
import menuHamburger from "../../assets/img/menuHamburger.svg";
import GB from "../../assets/img/flags/GB.svg";
import arr_down from "../../assets/img/arrow_down.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeLogin } from "../../redux/actions";
import { Link } from "react-router-dom";
import TruncateText from "./TruncateText";

function Burger({
  showBurger,
  handleLoginClick,
  handleRegistrClick,
  burgerContentRef,
}) {
  // checking if logged in

  const loginTxt = useSelector((state) => state.loginReducer.login);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    dispatch(removeLogin());
  }; // dropdown

  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  return (
    <div className="burgerActive_effects">
      <nav className="burgerActive" ref={burgerContentRef}>
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
          <Link to="/" className="groupNav_el">
            Home
          </Link>
          {token ? (
            <Link to="/history" className="groupNav_el">
              History
            </Link>
          ) : (
            <p className="groupNav_el" onClick={handleLoginClick}>
              History
            </p>
          )}
          <p className="groupNav_el">Blog</p>
          <p className="groupNav_el">FAQ</p>
          <p className="groupNav_el">API</p>
          <p className="groupNav_el">Support</p>
        </nav>
        <div className="burger_flag">
          <img src={GB} alt="" className="group2__lang_flag" />
          <img src={arr_down} alt="" className="group2__lang_arr" />
        </div>
        {loginTxt ? (
          <div
            className="loginTxtHeader_conyForDropdown"
            onClick={showDropdown}
          >
            <div className="group2_lang loginHeaderTxt_container loginHeaderTxt_container_burger">
              <div className="loginTxtHeader">
                <TruncateText text={loginTxt} maxLength={7} />
              </div>

              <img src={arr_down} alt="" className="group2__lang_arr" />
              {dropdown && (
                <div
                  className="quick__curency_dropdown quick__curency_dropdown_header quick__curency_dropdown_header_burger"
                  onClick={logout}
                >
                  <div className="quick__curency_dropdown_item">Log out</div>
                </div>
              )}
            </div>
          </div>
        ) : (
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
        )}
      </nav>
    </div>
  );
}

export default Burger;
