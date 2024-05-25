const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')
const MenuPage = require('../pageobjects/menu.page')
const CartPage = require('../pageobjects/cart.page')

describe('My Login application', () => {
    it('Saving the card after logout ', async () => {
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

        await MenuPage.burgerButton.click();
        const isBurgerMenuDisplayed = await MenuPage.burgerMenu.isDisplayed();
        expect(isBurgerMenuDisplayed).toBe(true);

        const islogOutButtonDisplayed = await MenuPage.logOutButton.isDisplayed();
        expect(islogOutButtonDisplayed).toBe(true);
       
        await MenuPage.logOutButton.click();
         
        const currentUrlafterLogOut = await browser.getUrl();
        expect(currentUrlafterLogOut).toEqual('https://www.saucedemo.com/');

        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('inventory');
        }, {
            timeout: 5000,
            timeoutMsg: 'expected url to be different after 5s'
        });

        await InventoryPage.shoppingCart.click();

        const currentCartUrl  = await browser.getUrl();
        expect(currentCartUrl).toEqual('https://www.saucedemo.com/cart.html');
      
       const isItemLabsBackpackCardDisplayed = await CartPage.itemLabsBackpack.isDisplayed();
       expect(isItemLabsBackpackCardDisplayed).toBe(true);

      
    });
});

    


