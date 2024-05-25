const { $ } = require('@wdio/globals')


class CheckoutCompletePage {
   
    get completeHeader() { return $('.complete-header'); }
    get backToProductsButton() { return $('#back-to-products'); }
    

    async isCompleteHeaderDisplayed() {
        await this.completeHeader.waitForDisplayed();
        return await this.completeHeader.isDisplayed();
    }
}

module.exports = new CheckoutCompletePage();
