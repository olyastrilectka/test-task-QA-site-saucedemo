const { $ } = require('@wdio/globals')


class InventoryPage {
    get inventoryContainer() { return $('#inventory_container'); }
    get shoppingCart() { return $('.shopping_cart_link'); }
    get shopingCartCntainer() { return $('#shopping_cart_container'); }
    get addToCart() { return $('#add-to-cart-sauce-labs-backpack'); }
    get itemLAddedToCart() { return $('.shopping_cart_badge'); }

    async isPageDisplayed() {
        await this.inventoryContainer.waitForDisplayed();
        return await this.inventoryContainer.isDisplayed() && await this.shoppingCart.isDisplayed();
    }

  async isItemInCart() {
        await this.itemLAddedToCart.waitForDisplayed();
        return await this.itemLAddedToCart.isDisplayed();
    }

    async isNoItemInCart() {
        const isDisplayed = await this.itemLAddedToCart.isDisplayed();
        return !isDisplayed;
    }
}

module.exports = new InventoryPage();
