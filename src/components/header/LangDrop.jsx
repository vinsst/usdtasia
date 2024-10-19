import React from "react";
import { languages } from "../../assets/languages";
// import { useTranslation } from "react-i18next";
function LangDrop() {
  // const { i18n } = useTranslation();

  // const handleLanguageChange = (languageCode) => {
  //   i18n.changeLanguage(languageCode);
  // };

  return (
    <div className="dropLang_container">
      {Object.entries(languages).map(([languageName, languageFlag], index) => {
        // const languageCode = languageFlag;
        return (
          <div
            className="dropLang_item"
            key={index}
            // onClick={() => handleLanguageChange(languageCode)}
          >
            <img
              src={languageFlag}
              alt={languageName}
              className="group2__lang_flag"
            />
            <p className="dropLang_item_ctrName">{languageName}</p>
          </div>
        );
      })}

      {/* <div className="dropLang_item">
        <img src={GB} alt="" className="group2__lang_flag" />
        <p className="dropLang_item_ctrName">English</p>
      </div>
      <div className="dropLang_item">
        <img src={ukraine} alt="" className="group2__lang_flag" />
        <p className="dropLang_item_ctrName">Ukrainian</p>
      </div>
      <div className="dropLang_item">
        <img src={GB} alt="" className="group2__lang_flag" />
        <p className="dropLang_item_ctrName">English</p>
      </div>
      <div className="dropLang_item">
        <img src={ukraine} alt="" className="group2__lang_flag" />
        <p className="dropLang_item_ctrName">Ukrainian</p>
      </div>
      <div className="dropLang_item">
        <img src={GB} alt="" className="group2__lang_flag" />
        <p className="dropLang_item_ctrName">English</p>
      </div>
      <div className="dropLang_item">
        <img src={ukraine} alt="" className="group2__lang_flag" />
        <p className="dropLang_item_ctrName">Ukrainian</p>
      </div>
      <div className="dropLang_item">
        <img src={GB} alt="" className="group2__lang_flag" />
        <p className="dropLang_item_ctrName">English</p>
      </div>
      <div className="dropLang_item">
        <img src={ukraine} alt="" className="group2__lang_flag" />
        <p className="dropLang_item_ctrName">Ukrainian</p>
      </div>
      <div className="dropLang_item">
        <img src={GB} alt="" className="group2__lang_flag" />
        <p className="dropLang_item_ctrName">English</p>
      </div> */}
    </div>
  );
}

export default LangDrop;
