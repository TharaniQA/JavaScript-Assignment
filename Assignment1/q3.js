//  Create an object browserConfig with browserName, headless (boolean),
//   timeout (number) and baseUrl. Print: 'Launching chrome
//   in headless mode with timeout 30000 on https://...' using the values from the object.

// Hint: Try building the message with template 
// literals: `Launching ${browserConfig.browserName} ...`

let browserConfig={
    browserName: 'Chrome',
    headless: true,
    timeout: 30000,
    baseUrl: 'https://...'

};
console.log(`Launching ${browserConfig.browserName} in headless mode with timeout ${browserConfig.timeout} on ${browserConfig.baseUrl} using the values from the object.`);