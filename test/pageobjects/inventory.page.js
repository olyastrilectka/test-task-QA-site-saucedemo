class InventoryPage {
    get menuButton() { return $('#react-burger-menu-btn'); }
    get allItemsSidebarLink() { return $('#inventory_sidebar_link'); }
    get aboutSidebarLink() { return $('#about_sidebar_link'); }
    get logoutSidebarLink() { return $('#logout_sidebar_link'); }
    get resetSidebarLink() { return $('#reset_sidebar_link'); }
    get closeButton() { return $('#react-burger-cross-btn'); }

    get shoppingCartLink() { return $('.shopping_cart_link'); }
    get shoppingCartBadge() { return $('.shopping_cart_badge'); }

    async getPageUrl() { const url = await browser.getUrl(); return url; }

    async waitForInventoryPageToLoad() {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('inventory'),
            {
                timeout: 5000,
                timeoutMsg: 'expected url to be different after 5s'
            }
        );
    }

    async openMenu() {
        await this.menuButton.click();
    }

    async closeMenu() {
        await this.closeButton.click();
    }

    async goToInventory() {
        await this.allItemsSidebarLink.click();
    }

    async goToAbout() {
        await this.aboutSidebarLink.click();
    }

    async logout() {
        await this.logoutSidebarLink.click();
    }

    async resetAppState() {
        await this.resetSidebarLink.click();
    }

    async openShoppingCart() {
        await this.shoppingCartLink.click();
    }

    async addItemToCart() {
        const addItemButton = $('#add-to-cart-sauce-labs-backpack');
        await addItemButton.click();
    }
}

module.exports = new InventoryPage();
