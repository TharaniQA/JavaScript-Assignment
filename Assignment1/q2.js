// Q2. Create an object loginPage that stores the locators of a 
// login page: usernameField, passwordField, loginButton, forgotPasswordLink.
//  Store XPath or CSS strings as values. Print each locator with a message 
// like: 'Locator for login button is: //button[@id="login"]'

let loginPage={
    usernameField: '#username',
    passwordField: '#password',
    loginButton: '//button[@id="login"]',
    forgotPasswordLink:" //link"

};
console.log("Locator for usernameField is:", loginPage.usernameField);
console.log("Locator for passwordField is:", loginPage.passwordField);
console.log("Locator for loginButton is:", loginPage.loginButton);
console.log("Locator for forgotPasswordLink is:", loginPage.forgotPasswordLink);