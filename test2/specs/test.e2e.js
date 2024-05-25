const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const ErrorMessageDisplayed  = require('../pageobjects/error.message')

describe('My Login application', () => {
    it('Login with invalid password', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', '123Qw');
        await expect(ErrorMessageDisplayed.errorMessageContainer()).toBeExisting()
          
         

    });
});




    


