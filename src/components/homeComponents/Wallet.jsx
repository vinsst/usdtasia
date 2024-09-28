import React, { useState, useEffect } from "react";
import wallet from "../../assets/img/wallet.svg";
import mailHome from "../../assets/img/mailHome.svg";
import profileHome from "../../assets/img/profileHome.svg";
import telegaHome from "../../assets/img/telegaHome.svg";
import content_copy from "../../assets/img/content_copy.svg";
import qr_code from "../../assets/img/qr_code.svg";

import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setName,
  setTelega,
  removeHighlight,
} from "../../redux/actions";

function Wallet() {
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };
  const handleTelegaChange = (e) => {
    dispatch(setTelega(e.target.value));
  };

  const email = useSelector((state) => state.contactsReducer.email);
  const name = useSelector((state) => state.contactsReducer.name);
  const telega = useSelector((state) => state.contactsReducer.telega);

  const highlight = useSelector((state) => state.highlightReducer.highlight);

  useEffect(() => {
    if (highlight) {
      setTimeout(() => {
        dispatch(removeHighlight());
      }, 500);
    }
  }, [dispatch, highlight]);

  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const hasValue = inputValue.length > 0;

  return (
    <>
      <section
        className={`quick__exchange_trcAdress_container mailNameTelega__mail_container ${
          highlight ? "highlight" : ""
        }`}
      >
        <div className="trcAdress_wallet">
          <img src={wallet} alt="" className="wallet_img" />
          <input
            type="text"
            className="wallet_input"
            placeholder="Your Tether (TRC20) address"
            onChange={handleInput}
          />
        </div>
        <div className="trcAdress_imgs">
          <img src={content_copy} alt="" className="trcAdress_imgs_img" />
          <img src={qr_code} alt="" className="trcAdress_imgs_img" />
        </div>
      </section>
      {hasValue && (
        <section className="mailNameTelega_container">
          <div
            className={`mailNameTelega__mail_container ${
              highlight ? "highlight" : ""
            }`}
          >
            <img
              src={mailHome}
              alt=""
              className="wallet_img wallet__img_3inps"
            />
            <input
              type="email"
              className="wallet_input"
              placeholder="Email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div
            className={`mailNameTelega__mail_container ${
              highlight ? "highlight" : ""
            }`}
          >
            <img
              src={profileHome}
              alt=""
              className="wallet_img wallet__img_3inps"
            />
            <input
              type="text"
              className="wallet_input"
              placeholder="Name"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div
            className={`mailNameTelega__mail_container ${
              highlight ? "highlight" : ""
            }`}
          >
            <img
              src={telegaHome}
              alt=""
              className="wallet_img wallet__img_3inps"
            />
            <input
              type="text"
              className="wallet_input"
              placeholder="Telegram"
              onChange={handleTelegaChange}
              value={telega}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Wallet;
