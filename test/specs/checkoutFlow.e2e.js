const addtocart = require("../pageobjects/add.to.cart");
const checkout = require("../pageobjects/checkout");
const loginPage = require("../pageobjects/login.page");


describe.skip('Checkout Flow', ()=>{
   //Should login before each it block.
   beforeEach(async()=> {
      await loginPage.open();
      await loginPage.login('jking@mail.com','P@$$w0rd@Yo#an');
    });
   xit('should add a product to the cart & purchase', async()=>{
      //Adding Product to Cart
      await addtocart.addToCart();
      //Purchasing the product
      await checkout.purchaseProduct("Kings Place","Shop 55","East 55th Street","China Town","New Orleans","Florida","12345-6789","1234567890");
   });
   xit('should verify purchase in order history',async ()=>{
      await checkout.verifyPurchase(); //elements can be found in the checkout.js file
   });
   
})