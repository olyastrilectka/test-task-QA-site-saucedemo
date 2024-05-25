const { $ } = require('@wdio/globals')


class InventoryPage {
    get inventoryContainer() { return $('#inventory_container'); }
    get socialTritterbutton() { return $('.social_twitter'); }
    get socialFacebookbutton() { return $('.social_facebook'); }
    get socialLinkedinbutton() { return $('.social_linkedin'); }

   

    async isPageDisplayed() {
        await this.inventoryContainer.waitForDisplayed();
        return await this.inventoryContainer.isDisplayed();
    }
}

module.exports = new InventoryPage();
