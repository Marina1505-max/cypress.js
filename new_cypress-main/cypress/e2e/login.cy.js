describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашла на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

         cy.get('body').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала на кнопку Войти

         cy.wait(10000);
         
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })

     it('Проверка восстанвления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

       
        cy.get('#forgotEmailButton').click(); // Нажимаю на восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввела почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажала отправить код
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })


    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('body').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio11'); // Ввела неверный пароль
         cy.get('#loginButton').click(); // Нажала на кнопку Войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })


     it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('body').type('germann@dolnikov.ru'); // Ввела неверный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала на кнопку Войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })


    
    it('Проверка на негативный кейс в валидации (ввод логина без @)', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('body').type('germanndolnikov.ru'); // Ввела логин без @
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала на кнопку Войти

         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })


    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль

        cy.get('body').type('GerMan@dolnikov.ru'); // Ввела логин 
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click(); // Нажала на кнопку Войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })

  })