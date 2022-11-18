const Page = require('./page');

class LoginPage extends Page {
   
    get email () {
        return $('#email');
    }
    get password(){
        return $("//fieldset[@class='fieldset login']//input[@id='pass']");
    }
    get signInButton(){
        return $("fieldset[class='fieldset login'] div[class='primary'] span");
    }
    
    async login (email,password) {
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.signInButton.click();
    }
   


    open () {
        return super.open('customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
    }
}

module.exports = new LoginPage();
