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
      Support_a5: "Mail support@usdtasia (тут поставим домен)",
      Support_a6: "24/7 – чат на сайте",
      Affilate_h: "Сотрудничество",
      Affilate_txt1:
        "Партнёрская программа позволяет зарегистрированным пользователям зарабатывать на партнерских отчислениях от обменов клиентов, которые перешли на наш сайт по реферальной ссылке. Участие в программе достаточно простое. Вам необходимо зарегистрироваться на нашем сайте. И написать в техподдержку, вам выдадут вашу персональную ссылку для осуществления обмена. Партнёрский процент зависит от общей суммы обменов ваших рефералов и будет меняться по таблице:",
      Affilate_txt2:
        "Вывод партнерской прибыли осуществляется каждый день. Минимальная сумма для вывода — 10$.",
      Affilate_level: "Уровень",
      Affilate_refs: "Общая сумма обменов рефералов",
      Affilate_yours: "Ваша",
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
