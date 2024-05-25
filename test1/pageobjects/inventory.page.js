const { $ } = require('@wdio/globals')
const Page = require('./page');

class InventoryPage {
    get inventoryContainer() { return $('#inventory_container'); }
    get shoppingCart() { return $('.shopping_cart_link'); }

    async isPageDisplayed() {
        await this.inventoryContainer.waitForDisplayed();
        return await this.inventoryContainer.isDisplayed() && await this.shoppingCart.isDisplayed();
    }
}

module.exports = new InventoryPage();
