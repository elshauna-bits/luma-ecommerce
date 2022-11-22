# luma-ecommerce

# How to execute
# Test: SignUp, Unhappy Path, Data-Driven Tests
Command: -Signup.e23.js npm run signup 
# The first test to be executed is the signUp.e2e.js.
#Information for a new user is already in the function. After running 'should sign up a new user'add an x to the it block (it should look like this xit) so that the test cannot be executed again. Run the command npm run signup again to explore the unhappy paths and data driven tests. 

# Test: Adding a Product to Cart, Purchasing a Product, Verify Purchase in Order History
Command: npm run checkout
After creating a new user, head to the checkoutFlow.e2e.js, a product will be added to the cart, purchased and verified. 
