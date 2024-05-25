const { $ } = require('@wdio/globals')

class CheckoutPage {
    get checkoutButton() { return $('#checkout'); }
    get itemLabsBackpack() { return $('#item_4_title_link'); }
    get finishButton() {return $('#finish'); }


    get inputFirstname () {
        return $('#first-name');
    }

    get inputLastname () {
        return $('#last-name');
    }

    get inputPostalCode () {
        return $('#postal-code');

    }

        get continueButton () {
            return $('#continue');
     
    }

    get errorMessage() { return $('.error-message'); }


    async checkout (inputFirstname, inputLastname, inputPostalCode) {
        await this.inputFirstname.setValue(inputFirstname);
        await this.inputLastname.setValue(inputLastname);
        await this.inputPostalCode.setValue(inputPostalCode)
        await this.continueButton.click();
    
    }

    

    async isErrorMessageDisplayed() {
        await this.errorMessage.waitForDisplayed();
        return await this.errorMessage.isDisplayed();
    }
    
}

module.exports = new CheckoutPage();
