const loginPage = require('../pageobjects/login.page')
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');

describe('Inventory menu', () => {
    it('Menu open', async () => {
        await loginPage.open()

        await loginPage.login('standard_user', 'secret_sauce')
        await inventoryPage.waitForInventoryPageToLoad();
        await inventoryPage.openMenu();

        expect(inventoryPage.allItemsSidebarLink).toBeDisplayedInViewport();
        expect(inventoryPage.aboutSidebarLink).toBeDisplayedInViewport();
        expect(inventoryPage.logoutSidebarLink).toBeDisplayedInViewport();
        expect(inventoryPage.resetSidebarLink).toBeDisplayedInViewport();
    })

    it('Menu logout', async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await inventoryPage.waitForInventoryPageToLoad();
        await inventoryPage.openMenu();
        await inventoryPage.logout();
        await loginPage.waitForPageToLoad();

        expect(await loginPage.getPageUrl()).toEqual('https://www.saucedemo.com/');
    })

    it('Saving the cart after logout ', async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await inventoryPage.waitForInventoryPageToLoad();

        await inventoryPage.addItemToCart();
        expect(inventoryPage.shoppingCartBadge).toBeDisplayed();

        await inventoryPage.openMenu();
        expect(inventoryPage.allItemsSidebarLink).toBeDisplayedInViewport();
        expect(inventoryPage.aboutSidebarLink).toBeDisplayedInViewport();
        expect(inventoryPage.logoutSidebarLink).toBeDisplayedInViewport();
        expect(inventoryPage.resetSidebarLink).toBeDisplayedInViewport();

        await inventoryPage.logout();
        await loginPage.waitForPageToLoad();

        expect(await loginPage.getPageUrl()).toEqual('https://www.saucedemo.com/');

        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.waitForInventoryPageToLoad();

        await inventoryPage.openShoppingCart();
        expect(await cartPage.getPageUrl()).toEqual('https://www.saucedemo.com/cart.html');

        expect(await cartPage.getItemCount()).toEqual(1);
        expect(await cartPage.getItemName(0)).toEqual('Sauce Labs Backpack');
    });

});





