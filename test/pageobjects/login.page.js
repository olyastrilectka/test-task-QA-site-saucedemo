class LoginPage {

    get username() {
        return $('#user-name');
    }

    get password() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get errorMessage() {
        return $('.error-message-container');
    }

    async getPageUrl() { const url = await browser.getUrl(); return url; }

    async waitForPageToLoad() {
        await browser.waitUntil(
            async () => (await browser.getUrl()).endsWith('https://www.saucedemo.com/'),
            {
                timeout: 5000,
                timeoutMsg: 'expected url to be different after 5s'
            }
        );
    }
    async open() {
        await browser.url('https://www.saucedemo.com');
    }

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
