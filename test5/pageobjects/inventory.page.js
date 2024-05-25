const { $ } = require('@wdio/globals')


class InventoryPage {
    get inventoryContainer() { return $('#inventory_container'); }
    get shoppingCart() { return $('.shopping_cart_link'); }
    get shopingCartCntainer() { return $('#shopping_cart_container'); }
    get addToCart() { return $('#add-to-cart-sauce-labs-backpack'); }
    get itemLAddedToCart() { return $('.shopping_cart_badge'); }

    async isPageDisplayed() {
        await this.inventoryContainer.waitForDisplayed();
        return await this.inventoryContainer.isDisplayed();
    }

    async isItemInCart() {
        await this.itemLAddedToCart.waitForDisplayed();
        return await this.itemLAddedToCart.isDisplayed();
    }
}

module.exports = new InventoryPage();
