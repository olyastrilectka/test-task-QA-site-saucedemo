const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')
const cartPage = require('../pageobjects/cart.page')
const checkoutPage = require('../pageobjects/checkout.page')
const CheckoutCompletePage = require('../pageobjects/checkout.complete.page')
const checkoutCompletePage = require('../pageobjects/checkout.complete.page')

describe('My Login application', () => {
    it('Valid Checkout', async () => {
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

        await InventoryPage.addToCart.click();

        const isCartNotEmpty = await InventoryPage.isItemInCart();
        expect(isCartNotEmpty).toBe(true);

        await cartPage.shoppingCartButton.click();
        const currentCartUrl = await browser.getUrl();
        expect(currentCartUrl).toEqual('https://www.saucedemo.com/cart.html');

        const isItemLabsBackpackCardDisplayed = await cartPage.itemLabsBackpack.isDisplayed();
        expect(isItemLabsBackpackCardDisplayed).toBe(true);

        await checkoutPage.checkoutButton.click();

        const currentUrlafterClickCheckoutButton = await browser.getUrl();
        expect(currentUrlafterClickCheckoutButton).toEqual('https://www.saucedemo.com/checkout-step-one.html');


        await checkoutPage.checkout('standard', 'user', '123');

        await checkoutPage.finishButton.click();

        const currentUrlafterClickFinishButton = await browser.getUrl();
        expect(currentUrlafterClickFinishButton).toEqual('https://www.saucedemo.com/checkout-complete.html');

        const isCompleteHeaderDisplayed = await checkoutCompletePage.completeHeader.isDisplayed();
        expect(isCompleteHeaderDisplayed).toBe(true);

        const isTextIsShown = await (await checkoutCompletePage.completeHeader).getText();
        expect(isTextIsShown).toContain('Thank you for your order!');

        await CheckoutCompletePage.backToProductsButton.click();

        const currentUrlafterClickbackToProductsButton = await browser.getUrl();
        expect(currentUrlafterClickbackToProductsButton).toEqual('https://www.saucedemo.com/inventory.html');


        const isCartEmpty = await InventoryPage.isNoItemInCart();
        expect(isCartEmpty).toBe(true);


    });
});




