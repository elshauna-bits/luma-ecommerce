const Page = require('./page');

class SignUpPage extends Page {
   
    get firstName () {
        return $('#firstname');
    }
    get lastName ()
    {
        return $('#lastname');
    }
    get newsletter(){
        return $('#is_subscribed');
    }
    get emailAddress ()
    {
        return $('#email_address');
    }
    get password(){
        return $('#password');
    }
    get confirmPassword()
    {
        return $('#password-confirmation')
    }
    get createAccountButton(){
        return $(`button[title='Create an Account'] span`);
    }
    get emailAddressError()
    {
        return $('#email_address-error');
    }
    get passwordConfirmationError(){
        return $('#password-confirmation-error');
    }
    async signUp (firstName,lastName,emailAddress,password,confirmPassword) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.newsletter.click();
        await this.emailAddress.setValue(emailAddress);
        await this.password.setValue(password);
        await this.confirmPassword.setValue(confirmPassword); 
        await this.createAccountButton.click();
        
        
    }
    async invalidsignUp (firstName,lastName,emailAddress,password,confirmPassword) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.emailAddress.setValue(emailAddress);
        await this.password.setValue(password);
        await this.confirmPassword.setValue(confirmPassword); 
        await this.createAccountButton.click();
        
    }


    open () {
        return super.open('customer/account/create/');
    }
}

module.exports = new SignUpPage();
