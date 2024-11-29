import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Home",
      History: "History",
      FAQ: "FAQ",
      TermsOfService: "Terms of Service",
      Support: "Support",
      SignIn: "Sign in",
      SignUp: "Sing up",
      LogOut: "Log out",
      CardOneMain: "24/7 support",
      CardOneTxt:
        "Our support team is available to assist you at any time of the day or night.",
      CardTwoMain: "The best rates on the market",
      CardTwoTxt:
        "We cooperate with more than 20 crypto trading platforms to offer you the most favorable rates.",
      CardThreeMain: "Fast transactions",
      CardThreeTxt:
        "The average transaction speed is 5-40 minutes, allowing you to quickly capitalize on market opportunities.",
      HomeQuestionsBlock1: "Why trust USDTASIA?",
      HomeAnswersBlock1:
        "USDTASIA is an instant and anonymous cryptocurrency exchange service that has been on the market since 2018. During this time, millions of users have successfully used our crypto exchange, and today we offer fast cryptocurrency exchange and purchase services to more than 2.6 million satisfied customers every month. In order to improve the functioning of our crypto exchange, we have partnered with industry leading companies. USDTASIA's qualified support staff is available 24/7 to help you with all your exchange related questions at any time.",
      HomeQuestionsBlock2: "How to exchange cryptocurrency",
      HomeAnswersBlock2:
        "1. 1.Set the exchange pair<br />Select the pair to be exchanged<br /><br />" +
        "2. Enter your wallet address<br />Enter the address of the cryptocurrency wallet to which your cryptocurrency will be sent<br /><br />" +
        "3. Make a payment<br />Send the cryptocurrency you want to exchange to the address you see on the screen<br /><br />" +
        "4. Wait for the funds to arrive<br />Track the progress of your exchange. You will receive your cryptocurrency or fiat money as soon as possible",
      HomeQuestionsBlock3: "How soon will I get my cryptocurrency?",
      HomeAnswersBlock3:
        "On average, the cryptocurrency exchange process takes between 15 and 60 minutes. However, this time may increase if a particular blockchain ",
      HomeQuestionsBlock4: "What cryptocurrencies do you support?",
      HomeAnswersBlock4:
        "Users are able to buy and exchange more than 500 cryptocurrencies in a few clicks at the best transaction rates. As the cryptocurrency market is developing very fast, we are continuously expanding the list of digital currencies available for fast exchange, buying and selling at the best rates. Exchange and buy BTC, ETH, XRP, LTC and other coins from a wide range of supported cryptocurrencies by choosing a convenient payment method (Visa, Mastercard, Apple Pay or bank transfer).",
      HomeQuestionsBlock5:
        "I couldn't find my currency in the list. What do I do?",
      HomeAnswersBlock5:
        "We have an extensive network of payout agents all over the world, if your exchange amount is more than 10000 usdt - we will find for you a way of payment and the best rate in any currency of the world",
      HomeQuestionsBlock6: "Do you have wholesale exchange rates?",
      HomeAnswersBlock6:
        "We have special rates for exchange amounts over 10000 usd. Write to us in online chat. USDTASIA support service, as well as the exchange service itself works round the clock and will be glad to help you",
      AboutOurBrand: "About our brand ",
      AffilateProgram: "AFFILATE Program",
      PrivacyPolicy: "Privacy Policy",
      Order: "Application",
      PersonalInformation: "Personal information",
      Created: "Created",
      Pending: "Pending",
      Cancelled: "Cancelled",
      Success: "Success",
      WhatShouldBeDone: "What to do next:",
      WhatShouldBeDone1:
        "Verify the data entered, you will need it in case you have any issues with the exchange",
      WhatShouldBeDone2:
        "Click on the button pay application and follow the further instructions",
      WhatShouldBeDone3:
        "After payment, write to the operator about the payment",
      WhatShouldBeDone4: "Wait for the receipt to your account or wallet",
      Terms_h: "USDTAsia's Terms of Service and Privacy Policy.",
      Terms_allTxt:
        "<br /> 1. Parties to the Agreement.<br /><br />" +
        " 1.1 The Agreement is concluded between the Internet service for exchange of Electronic Assets usdtasia hereinafter referred to as the Service, on the one hand, and the User, in the person of the one who has used the services of the Service, on the other hand.<br /><br />" +
        "2. List of terms.<br /><br />" +
        "2.1. The Service is a system of providing Internet services for exchange, sale and purchase of digital and/or electronic currencies <br /><br />" +
        "2.2. User is any natural person who uses the services of the Service<br /><br />" +
        "2.3. Application is an expression of the User's intention to use one of the services offered by the Service, by filling out an electronic form through the Service's website, on the terms and conditions described in the Agreement and specified in the parameters of this Application <br /><br />" +
        "2.4. Electronic Unit is a unit of account of the respective electronic settlement systems, denoting a certain amount of claims or other rights arising from the agreement of the electronic settlement systems with their users <br /><br />" +
        "3.Subject of the Agreement.<br /><br />" +
        "3.1. The subject of this Agreement is to provide the Service User with the service of exchange of Electronic Units. <br /><br />" +
        "4. General Terms and Conditions<br /><br />" +
        "4.1.This Agreement regulates the relations between the User and the Service regarding the services provided by the Service to the User and cancels all previous agreements between the Service and the User on this subject<br /><br />" +
        "4.2. This agreement comes into effect from the moment the User completes the formation of the Application<br /><br />" +
        "4.3 Both parties, represented by the Service and the User, accept this agreement as an equivalent contract in writing.<br /><br />" +
        "4.4. The Service reserves the right to unilaterally make changes to this agreement without appropriate notice to the User, but with mandatory publication of the current version of the agreement on this page.<br /><br />" +
        "4.5. This agreement includes clauses and subclauses of the rules described in the articles “Cryptocurrency Deposit Rules” and “Refund Rules”. <br /><br />" +
        "5. Terms of Service <br /><br />" +
        "5.1. If the Service account receives an amount that differs from the amount specified in the application, the Service makes a recalculation that corresponds to the actual receipt of Electronic Units. Most of the directions of the Service are carried out in automatic mode, when creating an Application for manual direction of the exchange, it is necessary to make sure that the operator is working (otherwise, payment will be made during the working hours of the operator). Cryptocurrency processing takes place after reaching the number of network confirmations defined by the Exchange, depending on the specific case. The required number of network confirmations for crediting Cryptocurrency Assets is specified in the article “Rules for Cryptocurrency Deposits”.<br /> <br />" +
        "5.2.In case the User requests a Refund, it follows the rules described in the article “Refund Rules”.<br /><br />" +
        "5.3. In case of cancelation of the agreement or receipt of erroneous payment, the Electronic Units are returned within 72 hours from the date of agreement to the Return.<br /><br />" +
        "5.4. If the Electronic Units are not received from the User on the Service's account within the specified period of time, from the moment of the User's application, the agreement between the parties is terminated by the Service on the one hand, as the agreement does not come into effect. If the Electronic Units are transferred to the Service's account after the specified period, such funds are subject to Refund according to the “Refund Rules” after the User's application or the Service restores the User's Application with the User's consent.<br /><br />" +
        "5.5. If there is a delay in transferring funds to the details specified by the User due to the fault of the settlement system, the Service is not liable for damages resulting from the long receipt of funds. In this case the User should agree that all claims will be brought to the settlement system, and the Service renders its assistance to the best of its abilities within the limits of the law. <br /> <br />" +
        "5.6. In case of using the services of the Service, the User fully agrees that the Service bears limited responsibility within the framework of these rules of the received title units and does not give additional guarantees to the User, as well as does not bear additional responsibility to the User. Accordingly, the User does not bear additional responsibility to the Service. <br /> <br />" +
        "5.7.The Service is not liable for damages and consequences in case of erroneous transfer of Electronic Units if the User has specified incorrect details when creating the Application. <br /> <br />" +
        "5.8. Claims for payments are accepted not later than 2 hours after the payment has been made. The cost of the service of search and refund of erroneous payments is 500 usdt. <br /> <br />" +
        "5.8.1. If the Customer specifies a bank card issued by a financial institution that does not match the bank selected in the direction of the exchange transaction, or makes a mistake in the specified details of the beneficiary, in accordance with the terms of service provision, the Customer is obliged to pay a fee of 100 usdt for processing the claim resulting from this discrepancy <br /> <br />" +
        "5.9.It is strictly forbidden to use the Service for illegal transfers and fraudulent actions. When entering into this agreement, the User undertakes to fulfill these requirements and in case of fraud to bear criminal liability established by law. <br /> <br />" +
        "6.10. At the first request the Service has the right to transfer information about the transfer of Electronic Units to law enforcement authorities, administration of payment systems, as well as to victims of illegal actions who suffered as a result of fraud proven by judicial authorities <br /> <br />" +
        "5.11. The User undertakes to present all documents proving his/her identity in case of suspicion of fraud and money laundering <br /> <br />" +
        "5.12. The User undertakes not to interfere with the operation of the Service and not to damage its software and hardware, and the User undertakes to provide accurate information to ensure that the Contractor fulfills all the terms and conditions of the contract. <br /> <br />" +
        "5.13. The User is obliged to comply with the norms corresponding to the legislation, as well as not to tamper with the communication flows and not to create obstacles for the normal operation of the program code of the Service <br /> <br />" +
        "5.14. The User is prohibited from making exchanges in favor of third parties <br /> <br /> " +
        "5.15. In case of suspicious transactions, the User may be asked for verification. <br /> <br />" +
        "5.16.In the case of using bank cards with a fee from the recipient (for the use of credit limit, cards for social payments, etc.) the fee is paid by the recipient, the exchange service does not bear any responsibility for such fees <br /> <br />" +
        "5.17. All payments made in fiat currencies are made without using decimal fractions <br /> <br />" +
        "6. Contingencies. <br /> <br />" +
        "6.1 If in the process of processing the User's Application unforeseen circumstances arise that contribute to the Service's failure to fulfill the terms and conditions of the Agreement, the deadlines for the fulfillment of the Application are postponed for the corresponding period of the duration of force majeure. The Service is not responsible for overdue obligations. Any factors that are beyond the control of the Service may be considered as unforeseen circumstances <br /> <br />" +
        "6.2 In case the client has not received an international transfer, we will make a refund, the refund period is 10 working days <br /> <br />" +
        "7.Claims and Disputes. <br /> <br />" +
        "7.1 Claims under this Agreement are accepted by the Service in the form of an e-mail in which the User specifies the essence of the claim or in the technical support chat of Users. <br /> <br />" +
        "8. Waiver of Obligations <br /> <br />" +
        "8.1.The Service has the right to refuse to conclude the contract and fulfill the Application without giving any reasons. <br /> <br />" +
        "9. Storage and processing of personal data <br /> <br />" +
        "9.1. The Service accepts personal data from the User for the purpose of carrying out operations, which the Service undertakes to store in encrypted form, not to make public, not to transfer to third parties, except for the cases described in clause 5.9 of this Agreement. 5.9 of this agreement <br /> <br />" +
        "9.2. The Service has the right, if necessary, to independently carry out activities to collect additional data about the User by any available means. All information collected as a result of such activities is not made public, is not transferred to third parties, except as described in paragraph 5.9. of this agreement <br /> <br />" +
        "9.3. The Service has the right to transfer the User's personal data and details of transactions performed by the User, provided that their confidential status is preserved upon an official written request of the Exchange or the Electronic Settlement System / court decision / own initiative (in case of need for investigation) to law enforcement authorities, as well as to the User to whom they belong <br /> <br />" +
        "9.4. All collected data about the User, as well as details of transactions made by him/her, shall be stored in the database of the Service for five years from the moment of execution by the Service of the last User's Order",
      Support_q1: "Contacting website tech support is quick and easy!",
      Support_q2: "Attention! We never write first!",
      Support_q3: "Online 24/7",
      Support_a1:
        "Our website team will help you solve any of your questions, Clean Exchange support is experienced, qualified and reliable team. Choose a suitable and comfortable way of communication and write to our operators by e-mail, telegram or in the chat window on the site! You will get an answer quickly and clearly, it's that easy!",
      Support_a2:
        "In social networks there is a large number of scammers who will try to embezzle your money pretending to be us. It is important to know that we never send requests to add or send any malicious links. A great way to protect yourself would be to only add to us through a link from the site, not through a search. Otherwise, we do not guarantee that you will be communicating with us and not with scammers whose goal is to obtain your personal data.",
      Support_a3:
        "In our service you get support 24/7, you can ask any question to our operators, regardless of the bitcoin rate at the moment or you have a technical error in the translation, our staff is always ready to answer you! Despite everything, the efficiency of our specialists is at the highest level. And their number allows us to organize round-the-clock work of the support service - without lunches, holidays and weekends.",
      Support_a4: "Telegram - @usdtasia_support",
      Support_a5: "Mail support@usdtasia.com",
      Support_a6: "24/7 - chat on the site",
      Affilate_h: "AFFILATE Program ",
      Affilate_txt1:
        "The affiliate program allows registered users to earn on affiliate royalties from the exchanges of customers who came to our site through a referral link. Participation in the program is quite simple. You need to register on our site. And write to tech support, you will be given your personal link to make the exchange. Partner percentage depends on the total amount of exchanges of your referrals and will vary according to the table:",
      Affilate_txt2:
        "Withdrawal of affiliate profit is carried out every day. The minimum amount for withdrawal is $10.",
      Affilate_level: "Level",
      Affilate_refs: "Total amount of exchanges of referrals ",
      Affilate_yours: "Your profit",
      Home_checkboxTxt1:
        "By using the site and creating an exchange, you agree to",
      Home_checkboxTxt2: "UsdtAsia's Terms of Service",
      Home_checkboxTxt3: "and",
      Home_checkboxTxt4: "Privacy Policy.",
      Order_data: "Order date:",
      Order_rate: "Exchange rate:",
      Order_statusLong: "Order processing status",
      Order_statusShort: "Status:",
      Order_pay: "PAY THE ORDER",
      Order2_congrat:
        "Congratulations! You have almost completed the exchange, to complete it, follow these steps",
      Order2_toFinish1: "To complete the transaction",
      Order2_toFinish2: "for the amount of:",
      Order2_toFinish3: "you will need to do the following:",
      Order2_inst1: "Make a payment using the details provided below",
      Order2_inst2: "Wait for the transaction to be confirmed on the network.",
      Order2_inst3: "Wait for your funds to be transferred",
      Order2_attention1: "Attention! ",
      Order2_attention2:
        "Before paying, open your Email and check the wallet number specified below with the number received in the Email message. The wallet numbers must match. If they do not match, do not make the payment and contact support! Verification of the wallet number is MANDATORY.",
      Order2_qr1: "Currency:",
      Order2_qr2: "Details:",
      Order2_qr3: "Copy address",
      Order2_t1:
        "* Depending on the country, funds are issued at the office or through a representative.",
      Order2_t2:
        "* For amounts above $10,000 in equivalent, an exchange is possible at the office or with the participation of a representative. This option is individual and depends on a number of factors.",
      Order2_t3:
        "* REMEMBER cryptocurrency transactions are not revocable. Carefully check the address to which you send funds. We will not be able to return funds if they are sent to the wrong wallet.",
      Order2_t4:
        "* The transaction is considered confirmed after 3 confirmations for the Bitcoin network.",
      Order2_cancel: "CANCEL ORDER",
      Order2_paid: "ORDER PAID",
      History_1: "DATE",
      History_2: "GIVING",
      History_3: "AMOUNT",
      History_4: "RECEIVING",
      History_5: "STATUS",
      Login_1: "Login",
      Login_2: "Registration",
      Login_3: "Password",
      Login_4: "Forgot your password?",
      Login_5: "Remember me",
      Login_6: "LOGIN",
      Registration_1: "Repeat password",
      Registration_2: "I have read and agree to the terms of service",
      Registration_3: "REGISTER",
    },
  },
  ru: {
    translation: {
      Home: "Домой",
      History: "История",
      FAQ: "FAQ",
      TermsOfService: "Условия",
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
      AboutOurBrand: "О нас",
      AffilateProgram: "Сотрудничество",
      PrivacyPolicy: "Политика конфиденциальности",
      Order: "Заявка",
      PersonalInformation: "Персональная информация",
      Created: "Создан",
      Pending: "В ожидании",
      Cancelled: "Отменено",
      Success: "Оплачена",
      WhatShouldBeDone: "Что делать дальше",
      WhatShouldBeDone1:
        "Проверьте введенные данные, они будут нужны в случае возникновения вопросов с обменом.",
      WhatShouldBeDone2:
        "Нажмите на кнопку оплатить заявку и следуйте дальнейшим инструкциям.",
      WhatShouldBeDone3: "После оплаты напишите оператору про оплату.",
      WhatShouldBeDone4: "Дождитесь поступления на счет или кошелек.",
      Terms_h: "Условия обслуживания и Политика конфиденциальности USDTAsia",
      Terms_allTxt:
        "<br /> 1. Стороны соглашения.<br /><br />" +
        " 1.1 Договор заключается между Интернет-сервисом по обмену Электронных Активов usdtasia далее Сервис, с одной стороны, и Пользователь, в лице того, кто воспользовался услугами Сервиса, с другой.<br /><br />" +
        "2. Список терминов.<br /><br />" +
        "2.1. Сервис система предоставления интернет-услуг по обмену, продаже и покупке цифровых и/или электронных валют. <br /><br />" +
        "2.2. Пользователь это любое физическое лицо, использующее услуги сервиса<br /><br />" +
        "2.3. Заявка выражение намерения Пользователя воспользоваться одной из услуг предлагаемых Сервисом, путем заполнения электронной формы через Интернет-сайт Сервиса, на условиях, описанных в Соглашении и указанных в параметрах этой Заявки. <br /><br />" +
        "2.4. Электронная единица учетная единица соответствующих систем электронных расчетов, обозначающая определенный объем прав требования или иных прав, вытекающих из договора систем электронных расчетов со своими пользователями. <br /><br />" +
        "3. Предмет соглашения.<br /><br />" +
        "3.1. Предметом настоящего Соглашения является предоставление Пользователю Сервисом услуги по обмену Электронных единиц. <br /><br />" +
        "4. Общие условияя<br /><br />" +
        "4.1.Данное соглашение регламентирует отношения между Пользователем и Сервисом по поводу услуг, предоставляемых Сервисом Пользователю, и отменяет все предшествующие договоренности между Сервисом и Пользователем по данному предмету.<br /><br />" +
        "4.2. Данное соглашение вступает в действие с момента завершения формирования Заявки Пользователем.<br /><br />" +
        "4.3 Данное соглашение обе стороны, в лице Сервиса и Пользователя, принимают как равноценный по юридической силе договор, обозначенный в письменной форме.<br /><br />" +
        "4.4. Сервис оставляет за собой право в одностороннем порядке вносить изменения в данное соглашение без соответствующего уведомления об этом Пользователя, но с обязательной публикацией актуальной версии соглашения на данной странице.<br /><br />" +
        "4.5. Данное соглашения включает в себя пункты и подпункты правил, описанные в статьях 'Правила зачисления криптовалютных депозитов' и 'Правила Возврата'. <br /><br />" +
        "5. Условия предоставления услуг <br /><br />" +
        "5.1. Если на счет Сервиса поступает сумма, отличающаяся от указанной в заявке, Сервис делает перерасчет, который соответствует фактическому поступлению Электронных единиц. Большинство направлений сервиса осуществляются в автоматическом режиме, при создании Заявки ручного направления обмена нужно убедится, что оператор работает (в противном случае, будет произведена выплата в рабочее время оператора). Обработка криптовалюты происходит после достижения определенного Биржей количества подтверждений сети в зависимости от конкретного случая. Нужное количество подтверждений сети для зачисления Криптовалютных Активов указано в статье 'Правила зачисления криптовалютных депозитов'.<br /> <br />" +
        "5.2. В случае, если Пользователь требует Возврат, он проходит по правилам, описанными в статье 'Правила Возврата'.<br /><br />" +
        "5.3. В случае аннулирования соглашения или поступление ошибочного платежа, Возврат Электронных единиц производится в течение 72 часов с момента согласия на Возврат.<br /><br />" +
        "5.4. Если Электронные единицы не поступают от Пользователя на счет Сервиса в течение указанного срока, с момента подачи заявки Пользователем, соглашение между сторонами расторгается Сервисом с одной стороны, так как договор не вступает в действие. Если Электронные единицы поступают на реквизиты Сервиса после указанного срока, то такие средства подлежат Возврату согласно 'Правилам Возврата' после обращение Пользователя или Сервис восстанавливает Заявку Пользователя с его согласия .<br /><br />" +
        "5.5. Если происходит задержка перевода средств на реквизиты, указанные Пользователем, по вине расчетной системы, Сервис не несет ответственности за ущерб, возникающий в результате долгого поступления денежных средств. В этом случае Пользователь должен согласиться с тем, что все претензии будут предъявляться к расчетной системе, а Сервис оказывает свою помощь по мере своих возможностей в рамках закона. <br /> <br />" +
        "5.6. В случае пользования услугами Сервиса, Пользователь полностью соглашается с тем, что Сервис несет ограниченную ответственность соответствующую рамкам настоящих правил полученных титульных знаков и не дает дополнительных гарантий Пользователю, а также не несет перед ним дополнительной ответственности. Соответственно Пользователь не несет дополнительной ответственности перед Сервисом. <br /> <br />" +
        "5.7. Сервис не несет ответственности за ущерб и последствия при ошибочном переводе Электронных единиц в том случае, если Пользователь указал при создании Заявки неверные реквизиты. <br /> <br />" +
        "5.8. Рекламации по платежам принимаются не позже 2 часов после осуществления платежа. Стоимость услуги поиска и возврата ошибочных платежей – 500 usdt. <br /> <br />" +
        "5.8.1. Если Клиент указывает банковскую карту, выпущенную финансовым институтом, который не совпадает с банком, выбранным в направлении операции обмена, либо совершает ошибку в указаных реквизитах получателя, в соответствии с условиями предоставления услуг, Клиент обязан оплатить комиссию в размере 100 usdt за обработку рекламационного требования, возникшего в результате данного несоответствия. <br /> <br />" +
        "5.9.Категорически запрещается пользоваться услугами Сервиса для проведения незаконных переводов и мошеннических действий. При заключении настоящего договора, Пользователь обязуется выполнять эти требования и в случае мошенничества нести уголовную ответственность, установленную законодательством. <br /> <br />" +
        "6.10. По первому требованию Сервис вправе передавать информацию о переводе Электронных единиц правоохранительным органам, администрации платежных систем, а также жертвам неправомерных действий, пострадавшим в результате доказанного судебными органами мошенничества. <br /> <br />" +
        "5.11. Пользователь обязуется представить все документы, удостоверяющие его личность, в случае подозрения о мошенничестве и отмывании денег. <br /> <br />" +
        "5.12. Пользователь обязуется не вмешиваться в работу Сервиса и не наносить урон его программной и аппаратной части, а также Пользователь обязуется передавать точные сведения для обеспечения выполнения Исполнителем всех условий договора. <br /> <br />" +
        "5.13. Пользователь обязуется выполнять нормы соответствующие законодательству, а также не подделывать коммуникационные потоки и не создавать препятствий для нормальной работы программного кода Сервиса. <br /> <br />" +
        "5.14. Пользователю запрещается производить обмены в пользу третьих лиц. <br /> <br /> " +
        "5.15. В случае подозрительных операций у Пользователя могут запросить верификацию. <br /> <br />" +
        "5.16. В случае использование банковских карт с комиссией с получателя (за использование кредитного лимита, карты для социальных выплат и т.д.) комиссию оплачивает получатель, сервис обмена не несет по таким комиссиям никакой ответственности. <br /> <br />" +
        "5.17. Все платежи, осуществляемые в фиатных валютах, производятся без применения десятичных долей." +
        "6. Непредвиденные обстоятельства. <br /> <br />" +
        "6.1 В случае, когда в процессе обработки Заявки Пользователя возникают непредвиденные обстоятельства, способствующие невыполнению Сервисом условий договора, сроки выполнения заявки переносятся на соответствующий срок длительности форс-мажора. За просроченные обязательства Сервис ответственности не несет. К непредвиденным обстоятельствам могут быть отнесены любые факторы, которые не зависят от Сервиса. <br /> <br />" +
        "6.2 В случае если клиенту не пришел международный перевод, нами будет совершен возврат средств, строк возврата 10 рабочих дней. <br /> <br />" +
        "7. Претензии и споры. <br /> <br />" +
        "7.1 Претензии по настоящему соглашению принимаются Сервисом в форме электронного письма, в котором Пользователь указывает суть претензии или в чате технической поддержки Пользователей. <br /> <br />" +
        "8. Отказ от обязательств. <br /> <br />" +
        "8.1. Сервис имеет право отказа на заключение договора и выполнение Заявки без объяснения причин. <br /> <br />" +
        "9. Хранение и обработка персональных данных <br /> <br />" +
        "9.1. Для проведения операций Сервис принимает от Пользователя его персональные данные, которые Сервис обязуется хранить в зашифрованном виде, не придавать огласке, не передавать третьим лицам, за исключением случаев, описанных п.5.9. настоящего соглашения. <br /> <br />" +
        "9.2. Сервис имеет право при необходимости самостоятельно осуществлять деятельность по сбору дополнительных данных о Пользователе любыми доступными способами. Вся информация, собранная в результате такой деятельности не придается огласке, не передается третьим лицам, за исключением случаев, описанных в п.5.9. настоящего соглашения. <br /> <br />" +
        "9.3. Сервис имеет право передавать персональные данные Пользователя и детали совершенных им операций при условии сохранения их конфиденциального статуса по официальному письменному запросу Биржи или Системы электронных расчетов / решению суда / собственной инициативе (в случае возникновения потребности в проведении расследования) правоохранительным органам, а также Пользователю, которому они принадлежат. <br /> <br />" +
        "9.4. Все собранные данные о Пользователе, а также детали совершенных им операций, хранятся в базе данных Сервиса в течение пяти лет с момента выполнения Сервисом последней Заявки Пользователя",
      Support_q1: "Связь с техподдержкой сайта — это быстро и легко!",
      Support_q2: "Внимание! Мы никогда не пишем первыми!",
      Support_q3: "Онлайн 24/7",
      Support_a1:
        "Наша команда сайта поможет вам решить любой ваш вопрос, поддержка Clean Exchange опытная, квалифицированная и надёжная команда. Выберите подходящий и комфортный для вас способ связи и напишите нашим операторам на e-mail, telegram или в окно-чата на сайте! Вы получите ответ быстро и чётко, это так просто!",
      Support_a2:
        "В социальных сетях присутствует большое количество мошенников, которые будут стараться присвоить ваши денежные средства, притворяясь нами. Важно знать, что мы никогда не отправляем заявок на добавление и не отправляем никаких вредоносных ссылок. Отличным способом обезопасить себя будет добавление к нам только по ссылке с сайта, а не через поиск. В противном случае мы не гарантируем, что вы будете общаться с нами, а не с мошенниками, целью которых является получение ваших персональных данных",
      Support_a3:
        "В нашем сервисе вы получаете поддержку 24/7, вы можете задать любой вопрос нашим операторам, вне зависимости курс биткоина на данный момент или у вас возникла техническая ошибка при переводе, наши сотрудники всегда готовы вам ответить! Несмотря на всё, работоспособность наших специалистов находится на высочайшем уровне. А их количество позволяет организовать круглосуточную работу службы поддержки – без обедов, праздников и выходных дней",
      Support_a4: "Telegram - @usdtasia_support",
      Support_a5: "Mail support@usdtasia",
      Support_a6: "24/7 – чат на сайте",
      Affilate_h: "Сотрудничество",
      Affilate_txt1:
        "Партнёрская программа позволяет зарегистрированным пользователям зарабатывать на партнерских отчислениях от обменов клиентов, которые перешли на наш сайт по реферальной ссылке. Участие в программе достаточно простое. Вам необходимо зарегистрироваться на нашем сайте. И написать в техподдержку, вам выдадут вашу персональную ссылку для осуществления обмена. Партнёрский процент зависит от общей суммы обменов ваших рефералов и будет меняться по таблице:",
      Affilate_txt2:
        "Вывод партнерской прибыли осуществляется каждый день. Минимальная сумма для вывода — 10$.",
      Affilate_level: "Уровень",
      Affilate_refs: "Общая сумма обменов рефералов",
      Affilate_yours: "Ваша",
      Home_checkboxTxt1: "Используя сайт и создавая обмен, вы соглашаетесь с",
      Home_checkboxTxt2: "Условиями обслуживания",
      Home_checkboxTxt3: "и",
      Home_checkboxTxt4: "Политикой конфиденциальности UsdtAsia.",
      Order_data: "Дата заявки:",
      Order_rate: "Курс обмена:",
      Order_statusLong: "Статус обработки заявки",
      Order_statusShort: "Статус:",
      Order_pay: "ОПЛАТИТЬ ЗАЯВКУ",
      Order2_congrat:
        "Поздравляем! Вы почти завершили обмен, для завершения, проделайте следующие шаги",
      Order2_toFinish1: "Для совершения операции",
      Order2_toFinish2: "на сумму:",
      Order2_toFinish3: "вам потребуется выполнить следующие действия:",
      Order2_inst1: "Совершите оплату по предоставленным ниже реквизитам",
      Order2_inst2: "Дождаться подтверждения транзакции в сети.",
      Order2_inst3: "Ожидайте перевода ваших средств",
      Order2_attention1: "Внимание! ",
      Order2_attention2:
        "Перед тем как оплатить, откройте Ваш Email и сверьте номер кошелька указанный ниже, с номером полученным в Email сообщении. Номера кошельков обязаны совпадать. В случае несовпадения, не выполняйте платеж и свяжитесь с поддержкой! Проверка номера кошелька ОБЯЗАТЕЛЬНА.",
      Order2_qr1: "Валюта:",
      Order2_qr2: "Реквизиты:",
      Order2_qr3: "Копировать адресс",
      Order2_t1:
        "* В зависимости от страны, выдача средств происходит в офисе либо через представителя.",
      Order2_t2:
        "* Для сумм выше 10 000$ в эквиваленте возможен обмен в офисе либо при участии представителя. Данная опция является индивидуальной и зависит от ряда факторов.",
      Order2_t3:
        "* ПОМНИТЕ криптовалютные транзакции являются не отзывными. Внимательно проверьте адрес, на который Вы отправляете средства. Мы не сможем вернуть средства, если они будут отправлены на неверный кошелек.",
      Order2_t4:
        "* Транзакция считается подтвержденной после 3х подтверждений для сети Bitcoin.",
      Order2_cancel: "ОТМЕНИТЬ ЗАЯВКУ",
      Order2_paid: "Я ОПЛАТИЛ(А) ЗАЯВКУ",
      History_1: "ДАТА",
      History_2: "ОТДАЕТЕ",
      History_3: "СУММА",
      History_4: "ПОЛУЧАЕТЕ",
      History_5: "СТАТУС",
      Login_1: "Логин",
      Login_2: "Регистрация",
      Login_3: "Пароль",
      Login_4: "Забыли пароль?",
      Login_5: "Запомнить меня",
      Login_6: "ВОЙТИ",
      Registration_1: "Пароль еще раз",
      Registration_2: "С правилами сервиса ознакомлен и согласен",
      Registration_3: "ЗАРЕГИСТРИРОВАТЬСЯ",
    },
  },
  zh: {
    translation: {
      Home: "家",
      History: "历史",
      FAQ: "常问问题",
      TermsOfService: "服务条款",
      Support: "支持",
      SignIn: "登入",
      SignUp: "注册",
      LogOut: "登出",
      CardOneMain: "24/7 支持",
      CardOneTxt: "我们的支持团队无论白天还是晚上，都可以为您提供帮助。",
      CardTwoMain: "市场上最优惠的价格",
      CardTwoTxt: "我们与 20 多个加密货币交易平台合作，为您提供最优惠的价格。",
      CardThreeMain: "快速交易",
      CardThreeTxt: "平均交易速度5-40分钟，让您快速把握市场先机。",
      HomeQuestionsBlock1: "为什么要信任 USDTASIA?",
      HomeAnswersBlock1:
        "USDTASIA 是一种即时匿名的加密货币兑换服务，自 2018 年上市以来一直如此。在此期间，数百万用户成功使用了我们的加密货币交易所，如今我们每月为超过 260 万满意的客户提供快速的加密货币兑换和购买服务。为了改善我们的加密货币交易所的功能，我们与行业领先的公司合作。USDTASIA 的合格支持人员 24/7 全天候待命，随时为您解决所有与交易所相关的问题。",
      HomeQuestionsBlock2: "如何兑换加密货币",
      HomeAnswersBlock2:
        "1. 1.设置兑换对<br />选择需要兑换的货币对<br /><br />" +
        "2. 输入您的钱包地址<br />输入您将要发送加密货币的加密货币钱包的地址<br /><br />" +
        "3. 付款<br />将您想要兑换的加密货币发送到您在屏幕上看到的地址<br /><br />" +
        "4. 等待资金到账<br />跟踪您的兑换进度。您将尽快收到您的加密货币或法定货币",
      HomeQuestionsBlock3: "我多久可以得到我的加密货币？",
      HomeAnswersBlock3:
        "平均而言，加密货币兑换过程需要 15 到 60 分钟。但是，如果某个区块链 ",
      HomeQuestionsBlock4: "你们支持哪些加密货币？",
      HomeAnswersBlock4:
        "用户只需点击几下鼠标，即可以最佳交易汇率购买和兑换 500 多种加密货币。由于加密货币市场发展非常迅速，我们正在不断扩大可供快速兑换、以最佳汇率购买和出售的数字货币列表。通过选择方便的付款方式（Visa、Mastercard、Apple Pay 或银行转账），从广泛的受支持的加密货币中兑换和购买 BTC、ETH、XRP、LTC 和其他硬币。",
      HomeQuestionsBlock5: "我在列表中找不到我的货币。我该怎么办？",
      HomeAnswersBlock5:
        "We have an extensive network of payout agents all over the world, if your exchange amount is more than 10000 usdt - we will find for you a way of payment and the best rate in any currency of the world",
      HomeQuestionsBlock6: "Do you have wholesale exchange rates?",
      HomeAnswersBlock6:
        "我们在世界各地拥有广泛的支付代理网络，如果您的兑换金额超过 10,000 美元 - 我们将为您找到一种付款方式以及世界上任何货币的最佳汇率",
      AboutOurBrand: "关于我们的品牌 ",
      AffilateProgram: "联盟计划",
      PrivacyPolicy: "隐私政策",
      Order: "应用",
      PersonalInformation: "个人信息",
      Created: "创建",
      Pending: "待办的",
      Cancelled: "取消",
      Success: "成功",
      WhatShouldBeDone: "下一步做什么：",
      WhatShouldBeDone1:
        "验证输入的数据，如果您在交易时遇到任何问题，您都需要它",
      WhatShouldBeDone2: "点击支付申请按钮并按照进一步的说明进行操作",
      WhatShouldBeDone3: "付款后，写信给接线员有关付款的信息",
      WhatShouldBeDone4: "等待收款到您的账户或钱包",
      Terms_h: "USDTAsia 的服务条款和隐私政策。",
      Terms_allTxt:
        "<br /> 1.本协定缔约方。<br /><br />" +
        " 1.1 本协议由 usdtasia 电子资产交易互联网服务（以下简称“服务”）与使用本服务的用户（以下简称“用户”）签订。<br /><br />" +
        "2. 术语列表。<br /><br />" +
        "2.1. 该服务是提供用于兑换、销售和购买数字和/或电子货币的互联网服务的系统。 <br /><br />" +
        "2.2. 用户是使用本服务的任何自然人<br /><br />" +
        "2.3.申请是用户使用服务提供的某项服务的意愿表达，通过服务网站填写电子表格，按照协议中描述的条款和条件以及本申请的参数指定 <br /><br />" +
        "2.4.电子单位是各电子结算系统的记账单位，表示电子结算系统与其用户之间达成的协议所产生的一定数额的债权或其他权利 <br /><br />" +
        "3.协议的主题。<br /><br />" +
        "3.1. 本协议的宗旨是向服务用户提供电子单位交换服务。 <br /><br />" +
        "4. 一般条款和条件<br /><br />" +
        "4.1.本协议规范用户和服务之间关于服务向用户提供的服务的关系，并取消服务与用户之间关于此主题的所有先前协议<br /><br />" +
        "4.2. 本协议自用户完成应用程序组建之日起生效<br /><br />" +
        "4.3 以服务和用户为代表的双方均接受本协议作为具有同等效力的书面合同。<br /><br />" +
        "4.4. 服务保留单方面修改本协议的权利，无需向用户发出适当通知，但必须在本页面上发布本协议的最新版本。<br /><br />" +
        "4.5.本协议包括“加密货币存款规则”和“退款规则”条款中描述的规则的条款及细则。 <br /><br />" +
        "5. 服务条款 <br /><br />" +
        "5.1. 如果服务账户收到的金额与申请中指定的金额不同，服务将重新计算与实际收到的电子单位相对应的金额。服务的大多数指示都是以自动模式进行的，在创建手动指示交易的申请时，必须确保操作员正在工作（否则，将在操作员的工作时间内付款）。加密货币处理在达到交易所定义的网络确认数后进行，具体取决于具体情况。记入加密货币资产所需的网络确认数在“加密货币存款规则”一文中指定。<br /> <br />" +
        "5.2.如果用户要求退款，则遵循“退款规则”中所述的规则。<br /><br />" +
        "5.3. 如果取消协议或收到错误付款，电子单元将在协议之日起 72 小时内退还。<br /><br />" +
        "5.4.如果在规定的时间内，服务账户中没有收到用户的电子单位，则从用户申请之日起，服务一方面终止双方之间的协议，因为协议不生效。如果在规定的期限后将电子单位转移到服务的账户，则在用户申请或服务在用户同意的情况下恢复用户的申请后，这些资金将根据“退款规则”退还。<br /><br />" +
        "5.5.如果由于结算系统故障导致资金延迟转入用户指定账户，服务不对因资金延迟而造成的损失负责。在这种情况下，用户应同意所有索赔均由结算系统处理，服务将在法律允许的范围内尽力提供帮助。<br /> <br />" +
        "5.6. 在使用本服务时，用户完全同意本服务在本规则框架内承担有限责任，不向用户提供额外担保，也不对用户承担额外责任。因此，用户不对本服务承担额外责任。 <br /> <br />" +
        "5.7.如果用户在创建应用程序时指定了错误的详细信息，则由于错误传输电子单元而造成的损害和后果，服务不承担责任。 <br /> <br />" +
        "5.8.付款索赔最迟在付款后 2 小时内受理。错误付款的查询和退款服务费用为 500 美元。 <br /> <br />" +
        "5.8.1. 如果客户指定的银行卡由与兑换交易方向所选银行不符的金融机构发行，或者受益人的详细信息有误，则根据服务条款，客户有义务支付 100 美元的费用来处理由此差异引起的索赔 <br /> <br />" +
        "5.9.严禁使用本服务进行非法转账和欺诈行为。用户在签订本协议时承诺履行这些要求，并在发生欺诈行为时承担法律规定的刑事责任。 <br /> <br />" +
        "6.10. 一经请求，服务机构有权将有关电子单位转移的信息转交给执法机构、支付系统管理部门以及因司法机构证实的欺诈行为而遭受非法行为侵害的受害者 <br /> <br />" +
        "5.11. 用户承诺在怀疑存在欺诈和洗钱的情况下出示所有可证明其身份的文件 <br /> <br />" +
        "5.12. 用户承诺不干扰服务的运行，不损坏其软件和硬件，并且用户承诺提供准确的信息以确保承包商履行合同的所有条款和条件。 <br /> <br />" +
        "5.13. 用户有义务遵守法律规定的规范，不得篡改通信流程，不得对服务程序代码的正常运行造成障碍 <br /> <br />" +
        "5.14.用户不得与第三方进行交易 <br /> <br /> " +
        "5.15. 如果出现可疑交易，可能会要求用户进行验证。 <br /> <br />" +
        "5.16.如果使用银行卡时收取收款人的费用（使用信用额度、社会支付卡等），费用由收款人支付，兑换服务不承担此类费用的任何责任<br /> <br />" +
        "5.17. 所有以法定货币进行的付款均不使用小数 <br /> <br />" +
        "6. 意外事件。 <br /> <br />" +
        "6.1 如果在处理用户申请的过程中发生不可预见的情况，导致服务无法履行协议的条款和条件，则履行申请的期限将推迟不可抗力持续时间的相应时间。服务不对逾期义务负责。任何超出服务控制范围的因素都可能被视为不可预见的情况 <br /> <br />" +
        "6.2 如果客户没有收到国际转账，我们将退款，退款期限为 10 个工作日 <br /> <br />" +
        "7.索赔和争议。 <br /> <br />" +
        "7.1 本协议项下的索赔将以电子邮件的形式由服务接受，用户在电子邮件中指定索赔的实质，或在用户的技术支持聊天中接受。 <br /> <br />" +
        "8. 放弃义务 <br /> <br />" +
        "8.1.本服务有权拒绝签订合同和履行申请，无需给出任何理由。 <br /> <br />" +
        "9. 个人信息的存储和处理 <br /> <br />" +
        "9.1. 本服务接受用户的个人数据以执行操作，本服务承诺以加密形式存储这些数据，不公开，不转让给第三方，但本协议第 5.9 条所述情况除外。本协议第 5.9 条 <br /> <br />" +
        "9.2. 如有必要，服务有权通过任何可用手段独立开展活动以收集有关用户的额外数据。除本协议第 5.9 段所述外，此类活动收集的所有信息均不会公开，也不会转让给第三方。<br /> <br />" +
        "9.3.本服务有权将用户的个人数据和用户执行的交易的详细信息传输给执法机构，前提是其机密状态在交易所或电子结算系统的正式书面请求/法院判决/主动（需要调查的情况下）下得到保留，以及其所属的用户<br /> <br />" +
        "9.4. 所有收集到的有关用户的数据以及用户进行的交易的详细信息，应从服务执行最后一个用户订单之日起在服务的数据库中存储五年",
      Support_q1: "联系网站技术支持快捷又简单！",
      Support_q2: "注意！我们从不先写！",
      Support_q3: "24/7 在线",
      Support_a1:
        "我们的网站团队将帮助您解决任何问题，Clean Exchange 支持是经验丰富、合格且可靠的团队。选择合适且舒适的沟通方式，通过电子邮件、电报或网站上的聊天窗口给我们的操作员写信！您将快速而清楚地得到答复，就是这么简单！",
      Support_a2:
        "在社交网络中，有大量骗子会冒充我们，试图盗用您的钱财。重要的是要知道，我们绝不会发送添加请求或发送任何恶意链接。保护自己的一个好方法是只通过网站上的链接向我们添加，而不是通过搜索。否则，我们不能保证您将与我们交流，而不是与那些以窃取您的个人数据为目标的骗子交流。",
      Support_a3:
        "在我们的服务中，您可以获得 24/7 全天候支持，您可以向我们的操作员询问任何问题，无论当前的比特币汇率如何，或者您在翻译中遇到技术错误，我们的工作人员随时准备为您解答！尽管如此，我们专家的效率仍处于最高水平。他们的数量使我们能够组织全天候的支持服务工作 - 无需午餐、假期和周末。",
      Support_a4: "电报-@usdtasia_support",
      Support_a5: "邮箱 support@usdtasia.com",
      Support_a6: "24/7 - 在网站上聊天",
      Affilate_h: "联盟计划 ",
      Affilate_txt1:
        "联盟计划允许注册用户从通过推荐链接访问我们网站的客户的交易中赚取联盟版税。参与该计划非常简单。您需要在我们的网站上注册。并写信给技术支持，您将获得进行交易的个人链接。合作伙伴百分比取决于您推荐的交换总额，并将根据表格而有所不同：",
      Affilate_txt2: "联盟利润的提取每天都会进行。提取的最低金额为 10 美元。",
      Affilate_level: "等级",
      Affilate_refs: "推荐交换总量 ",
      Affilate_yours: "您的利润",
      Home_checkboxTxt1: "通过使用本网站并创建交易，您同意",
      Home_checkboxTxt2: "UsdtAsia 的服务条款",
      Home_checkboxTxt3: "和",
      Home_checkboxTxt4: "隐私政策。",
      Order_data: "订单日期：",
      Order_rate: "汇率：",
      Order_statusLong: "订单处理状态",
      Order_statusShort: "地位：",
      Order_pay: "支付订单",
      Order2_congrat:
        "恭喜！您几乎已经完成交换，要完成交换，请按照以下步骤操作",
      Order2_toFinish1: "完成交易",
      Order2_toFinish2: "金额为：",
      Order2_toFinish3: "您需要执行以下操作：",
      Order2_inst1: "使用下面提供的详细信息进行付款",
      Order2_inst2: "等待网络确认交易。",
      Order2_inst3: "等待资金转账",
      Order2_attention1: "注意力！ ",
      Order2_attention2:
        "付款前，请打开您的电子邮件，检查下面指定的钱包号码与电子邮件中收到的号码。钱包号码必须匹配。如果不匹配，请不要付款并联系客服！钱包号码验证是强制性的。",
      Order2_qr1: "货币：",
      Order2_qr2: "细节：",
      Order2_qr3: "复制地址",
      Order2_t1: "* 根据国家/地区的不同，资金将在办公室或通过代表发放。",
      Order2_t2:
        "*对于等值 10,000 美元以上的金额，可以在办公室或由代表进行兑换。此选项因人而异，取决于多种因素。",
      Order2_t3:
        "* 请记住，加密货币交易不可撤销。请仔细检查您发送资金的地址。如果资金被发送到错误的钱包，我们将无法退还资金。",
      Order2_t4: "* 比特币网络经过 3 次确认后，交易即被视为确认。",
      Order2_cancel: "取消订单",
      Order2_paid: "订单已付款",
      History_1: "日期",
      History_2: "捐赠",
      History_3: "数量",
      History_4: "接收",
      History_5: "地位",
      Login_1: "登录",
      Login_2: "登记",
      Login_3: "密码",
      Login_4: "忘记密码了吗？",
      Login_5: "记住账号",
      Login_6: "登录",
      Registration_1: "重复密码",
      Registration_2: "我已阅读并同意服务条款",
      Registration_3: "登记",
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
