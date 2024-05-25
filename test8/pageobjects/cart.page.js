const { $ } = require('@wdio/globals')

class CartPage {
    get shoppingCartButton() { return $('.shopping_cart_link'); }
       

    get itemLabsBackpack() { return $('#item_4_title_link'); }

    

}
 
module.exports = new CartPage();
