class CartPage {
    get cartItems() { return $$('.cart_item'); }
    get checkoutButton() { return $('#checkout'); }
    get continueShoppingButton() { return $('#continue-shopping'); }
    get itemNames() { return $$('.inventory_item_name'); }


    async getPageUrl() { const url = await browser.getUrl(); return url; }

    async waitForCartPageToLoad() {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('cart'),
            {
                timeout: 5000,
                timeoutMsg: 'expected url to be different after 5s'
            }
        );
    }

    open() {
        browser.url('/cart.html');
    }

    async getItemCount() {
        const itemCount = await this.cartItems.length;
        return itemCount;
    }

    clickCheckoutButton() {
        this.checkoutButton.click();
    }

    clickContinueShoppingButton() {
        this.continueShoppingButton.click();
    }

    async getItemName(index) {
        const itemName = await this.itemNames[index].getText();
        return itemName;
    }

}

module.exports = new CartPage();
