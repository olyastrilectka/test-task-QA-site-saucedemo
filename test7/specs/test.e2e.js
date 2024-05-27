const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')


describe('My Login application', () => {
    it('Footer Links', async () => {
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

        await InventoryPage.socialTritterbutton.click();
        await browser.switchWindow('https://x.com/saucelabs');

        const currentUrlAfterClickTwitterButton = await browser.getUrl();
        expect(currentUrlAfterClickTwitterButton).toEqual('https://x.com/saucelabs');
        await browser.closeWindow();
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');


        await InventoryPage.socialFacebookbutton.click();
        await browser.switchWindow('https://www.facebook.com/saucelabs');

        const currentUrlafterClickFacebookbutton = await browser.getUrl();
        expect(currentUrlafterClickFacebookbutton).toEqual('https://www.facebook.com/saucelabs');
        await browser.closeWindow();
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');

        await InventoryPage.socialLinkedinbutton.click();
        await browser.switchWindow('https://www.linkedin.com/company/sauce-labs/');

        const currentUrlafterClickLinkedinbutton = await browser.getUrl();
        expect(currentUrlafterClickLinkedinbutton).toEqual('https://www.linkedin.com/company/sauce-labs/');
        await browser.closeWindow();
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');

    });
});




