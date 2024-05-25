const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const ErrorMessageDisplayed  = require('../pageobjects/error.message')

describe('My Login application', () => {
    it('Login with invalid login', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_id', 'secret_sauce');
        await expect(ErrorMessageDisplayed.errorMessageContainer()).toBeExisting()
          
         

    });
});




    


