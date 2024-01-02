const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

const driver = new Builder()
  .forBrowser('chrome')
  .build();

async function runTest() {
  try {
    // Navigate to the checkboxes page
    await driver.get('https://the-internet.herokuapp.com/checkboxes');
    await driver.sleep(5000);
    // Check the first checkbox
    const checkbox1 = await driver.findElement(By.xpath('//form[@id="checkboxes"]//input[1]'));
    await checkbox1.click();

    // Uncheck the second checkbox
    const checkbox2 = await driver.findElement(By.xpath('//form[@id="checkboxes"]//input[2]'));
    await checkbox2.click();

    // Assert that the first checkbox is checked
    assert.strictEqual(await checkbox1.isSelected(), true, 'Checkbox 1 is not checked');

    // Assert that the second checkbox is unchecked
    assert.strictEqual(await checkbox2.isSelected(), false, 'Checkbox 2 is not unchecked');

    // Pause for a moment to visually inspect the changes (optional)
    await driver.sleep(2000);

  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

// Run the test
runTest();
