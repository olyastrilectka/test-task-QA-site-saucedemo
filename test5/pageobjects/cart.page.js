const { $ } = require('@wdio/globals')

class CartPage {
    get shoppingCartButton() { return $('shopping_cart_link'); }
       

    get itemLabsBackpack() { return $('#item_4_title_link'); }

    async isPageDisplayed() {
        await this.inventoryContainer.waitForDisplayed();
        return await this.inventoryContainer.isDisplayed() && await this.shoppingCart.isDisplayed();
    }
}

module.exports = new CartPage();
