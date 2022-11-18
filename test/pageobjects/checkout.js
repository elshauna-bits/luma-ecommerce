class Checkout {
    
    get proceedToCart (){
        return $("//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']");
    }
    get shoppingCart(){
        return $("//a[normalize-space()='shopping cart']");
    }
    get proceedToCheckout(){
        return $("//button[@data-role='proceed-to-checkout']");
    }
    get company () {
        return $("[name=company]");
    }
    get address0 (){
        return $('[name="street[0]"]');
    }
    get address1 (){
        return $(`[name="street[1]"]`);
    }
    get address2 (){
        return $('//input[@name="street[2]"]');
    }
    get city(){
        return $("[name=city]");
    }
    get stateOrProvince()
    {
        return $("[name=region_id]");
    }
    get postalCode(){
        return $("[name=postcode]");
    }  
    get phoneNumber(){
        return $('//input[@name="telephone"]');
    }
    get shippingMethod(){
        return $("[name='ko_unique_1']");
    }
    get nextButton(){
        return $('.button.action.continue.primary');
    }
    get placeOrderButton(){
        return $("button[title='Place Order']");
    }
    get whatsNew(){
        return $("//a[@id='ui-id-3']");
    }
    get recentlyOrderBlock(){
        return $("//div[@class='block block-reorder']//div[@class='block-title']");
    }
    get viewAll(){
        return $("//span[normalize-space()='View All']");
    }
    get recentOrders(){
        return $('//*[@id="maincontent"]/div[2]/div[1]/div[5]/div[1]/strong');
    }

    async purchaseProduct (company,address0,address1,address2,city,state,postalCode,phoneNumber) {
     await this.proceedToCart.waitForDisplayed();
     await this.shoppingCart.click();
     await this.proceedToCheckout.click();
     await this.company.setValue(company);
     await this.address0.setValue(address0);
     await this.address1.setValue(address1);
     await this.address2.setValue(address2);
     await this.city.setValue(city);
     await this.stateOrProvince.selectByVisibleText(state);
     await this.postalCode.setValue(postalCode);
     await this.phoneNumber.setValue(phoneNumber);
     await this.shippingMethod.click();
     await this.nextButton.click();
     await this.placeOrderButton.click();
    }
    async verifyPurchase(){
     await this.whatsNew.click();
     await this.recentlyOrderBlock.scrollIntoView();
     await this.viewAll.click();
     await expect(this.recentOrders).toHaveText(['Recent Orders']);

    }
   
}

module.exports = new Checkout();
