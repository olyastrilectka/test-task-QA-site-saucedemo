const loginPage = require('../pageobjects/login.page')
const inventoryPage = require('../pageobjects/inventory.page')

describe('My Login application', () => {
    it('Valid Login', async () => {
        await loginPage.open()

        await loginPage.login('standard_user', 'secret_sauce')
        await inventoryPage.waitForInventoryPageToLoad();

        expect(await inventoryPage.getPageUrl()).toContain('inventory');
        expect(inventoryPage.shoppingCartLink).toBeDisplayed();
        expect(inventoryPage.inventoryItems).toBeDisplayed();
    });

    it('Login with invalid password', async () => {
        await loginPage.open()
        await loginPage.login('standard_user', '123Qw');

        await expect(loginPage.errorMessage).toBeExisting()
    });

    it('Login with invalid login', async () => {
        await loginPage.open()
        await loginPage.login('standard_id', 'secret_sauce');

        await expect(loginPage.errorMessage).toBeExisting()
    });
});




