const { $ } = require('@wdio/globals')

class MenuPage {
    get burgerMenu() { return $(".bm-menu");}
    get burgerButton() { return $('#react-burger-menu-btn'); }
    get logOutButton() { return $('#logout_sidebar_link'); }

    async isMenuDisplayed() {
        await this.burgerButton.waitForDisplayed();
        return await this.burgerButton.isDisplayed() && await this.logout.isDisplayed();
    }
}

module.exports = new MenuPage();
