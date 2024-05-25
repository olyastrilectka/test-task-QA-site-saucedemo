const { $ } = require('@wdio/globals')
const Page = require('./page');

class ErrorMessageDisplayed extends Page{
    //get errorMessageContainer() { return $('.error-message-container'); }

    errorMessageContainer() { return $('.error-message-container'); }
  
   
}

module.exports = new ErrorMessageDisplayed();


