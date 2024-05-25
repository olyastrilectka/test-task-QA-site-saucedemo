const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')

describe('My Login application', () => {
    it('Valid Login', async () => {
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
    });
});

    


