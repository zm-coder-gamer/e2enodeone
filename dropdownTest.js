  // In command line first run "npm install selenium-webdriver chromedriver" then run "node checkboxTestSelenium.js"
const { Builder, By, Key, until } = require('selenium-webdriver');

async function testDropdown() {
  // Set up the Selenium WebDriver
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the website
    await driver.get('https://the-internet.herokuapp.com/dropdown');

    // Locate the dropdown element by its ID (in this case, it's "dropdown")
    const dropdownElement = await driver.findElement(By.id('dropdown'));

    // Click on the dropdown to open the options
    await dropdownElement.click();

    // Locate the option you want to select by its text (in this case, it's "Option 1")
    const option1Element = await driver.findElement(By.xpath('//option[text()="Option 1"]'));

    // Click on the option to select it
    await option1Element.click();

    // Wait for a moment to see the selected option (optional)
    await driver.sleep(2000);

  } finally {
    // Close the browser window
    await driver.quit();
  }
}

// Run the test function
testDropdown();
