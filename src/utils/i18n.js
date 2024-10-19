import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      SignIn: "Sign in",
      SignUp: "Sign up",
      Home: "Home",
      Blog: "Blog",
      History: "History",
    },
  },
  ua: {
    translation: {
      SignIn: "Увійти",
      SignUp: "Зареєструватися",
      Home: "Головна",
      Blog: "Блог",
      History: "Історія",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
