const { faker } = require('@faker-js/faker');
const signupPage = require('../pageobjects/signup.page');

describe('Authentication', ()=>{
   //Should open the Create New Customer Account page
   beforeEach(async ()=> {
      await signupPage.open();
    });

   it('should sign up a new user', async()=>{
      await signupPage.signUp('Paula','Hinds','paulahinds@mail.com','P@$$w0rd@Yo#an','P@$$w0rd@Yo#an');

   });

   //Unhappy paths
   xit('should not sign up a new user with invalid email', async()=>{
      await signupPage.invalidsignUp('Lina','Lewis','llima-opzz-mail.com','P@$$w0rd@Yo2an','P@$$w0rd@Yo2an');
   });
   xit('should not sign up a new user when the passwords do not match', async()=>{
      await signupPage.invalidsignUp('Kimina','Lewis','llima-opzz-mail.com','P@rd@Yo2an','P@$$w0rd@Yo2an');
   });
   
   //Data Driven Test
   xit('should sign up a new user with values from faker', async ()=>{
    const password = faker.internet.password();
    const confirmPassword = password;
    await signupPage.signUp(faker.name.firstName(),faker.name.lastName(),faker.internet.email('hotmail.com'),password,confirmPassword);
   }); 
})