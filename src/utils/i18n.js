import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {},
  },
  ru: {
    translation: {
      Home: "Домой",
      History: "История обменов",
      FAQ: "FAQ",
      TermsOfService: "Условия обслуживания",
      Support: "Поддержка",
      SignIn: "Вход",
      SignUp: "Регистрация",
      LogOut: "Выйти",
      CardOneMain: "Поддержка 24/7",
      CardOneTxt:
        "Наша служба поддержки готова помочь вам в любое время суток.",
      CardTwoMain: "Лучшие курсы на рынке",
      CardTwoTxt:
        "Мы сотрудничаем более чем с 20 площадками для крипто торговли, чтобы предложить вам самые выгодные курсы.",
      CardThreeMain: "Быстрые транзакции",
      CardThreeTxt:
        "Средняя скорость транзакции составляет 5-40 минут, что позволяет оперативно воспользоваться рыночными возможностями",
      HomeQuestionsBlock1: "Почему стоит доверять USDTASIA?",
      HomeAnswersBlock1:
        "USDTASIA- это сервис мгновенного и анонимного обмена криптовалюты, который существует на рынке с 2015 года. За это время миллионы пользователей успешно воспользовались нашим криптообменником, и сегодня мы предлагаем услуги быстрого обмена и покупки криптовалют более 2,6 миллионам довольных клиентов ежемесячно. Для того, чтобы улучшить функционирование нашего криптообменника, мы сотрудничаем с ведущими компаниями отрасли. Квалифицированные сотрудники службы поддержки USDTASIA работают круглосуточно и без выходных, чтобы в любое время помочь вам со всеми вопросами, связанными с обменом.",
      HomeQuestionsBlock2: "Как обменять криптовалюту",
      HomeAnswersBlock2:
        "1. Установите обменную пару<br />Выберите пару для обмена.<br /><br />" +
        "2. Введите адрес вашего кошелька<br />Введите адрес криптокошелька, на который будет отправлена ваша криптовалюта.<br /><br />" +
        "3. Совершите платеж<br />Отправьте криптовалюту, которую хотите обменять, на адрес, который видите на экране.<br /><br />" +
        "4. Дождитесь поступления средств<br />Отслеживайте ход вашего обмена. Вы получите свою криптовалюту или фиатные денежные средства в ближайшее время.",
      HomeQuestionsBlock3: "Как скоро я получу свою криптовалюту?",
      HomeAnswersBlock3:
        "В среднем, процесс обмена криптовалюты занимает от 15 до 60 минут. Однако в случае загруженности определенного блокчейна это время может увеличиться.",
      HomeQuestionsBlock4: "Какие криптовалюты вы поддерживаете?",
      HomeAnswersBlock4:
        "Пользователи имеют возможность покупать и обменивать более 500 криптовалют в несколько кликов по лучшим транзакционными тарифам. Поскольку криптовалютный рынок развивается очень быстро, мы непрерывно расширяем список цифровых валют, доступных для быстрого обмена, покупки и продажи по лучшим курсам. Обменивайте и покупайте BTC, ETH, XRP, LTC и другие монеты из широкого спектра поддерживаемых криптовалют, выбрав удобный для вас способ оплаты (Visa, Mastercard, Apple Pay или банковский перевод).",
      HomeQuestionsBlock5: "Я не нашел свою валюту в списке. Что делать?",
      HomeAnswersBlock5:
        "Мы имеем разветвленную сеть агентов по выплате по всему миру, если сумма вашего обмена составляет более 10000 usdt – мы найдем для вас способ выплаты и оптимальный курс в любой валюте мира.",
      HomeQuestionsBlock6: "Есть ли у вас оптовый курс обмена?",
      HomeAnswersBlock6:
        "Для обмена сумм более 10000 usd у нас действует специальные тарифы. Напишите нам в онлайн-чат. Служба поддержки USDTASIA, как и сам сервис обмена работает круглосуточно и будет рад помочь вам.",
      Support: "Поддержка",
      AboutOurBrand: "О нас",
      AffilateProgram: "Сотрудничество",
      TermsOfService: "Условия обслуживания",
      PrivacyPolicy: "Политика конфиденциальности",
    },
  },
};

const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
  react: {
    transKeepBasicHtmlNodesFor: ["strong", "br"],
  },
});

export default i18n;
