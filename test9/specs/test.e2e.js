const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')
const CartPage = require('../pageobjects/cart.page')


describe('My saucedemo site', () => {
    it('Checkout without products', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('inventory');
        }, {
            timeout: 5000,
            timeoutMsg: 'expected url to be different after 5s'
        });

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('inventory');

       // Verify products and cart are displayed
        const isInventoryPageDisplayed = await InventoryPage.isPageDisplayed();
        expect(isInventoryPageDisplayed).toBe(true);

        await CartPage.shoppingCartButton.click();
        const currentCartUrl  = await browser.getUrl();
        expect(currentCartUrl).toEqual('https://www.saucedemo.com/cart.html');
      
       const errorMessageElement = await $("//*[contains(text(),'Cart is empty')]");
       const errorMessageElementExisting = await errorMessageElement.isExisting();

       if(!errorMessageElementExisting){
        throw new Error('Error is not displayed');
       }
       const errorMessage = errorMessageElement.getText();

        expect(errorMessage).toContain('Cart is empty');

     
    });
});

    


