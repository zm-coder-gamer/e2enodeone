const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest(testFunction) {
  const driver = new Builder().forBrowser('chrome').build();

  try {
    await testFunction(driver);
  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    await driver.quit();
  }
}

module.exports = { runTest };
