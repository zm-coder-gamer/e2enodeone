const { assert } = require('assert');
const { runTest } = require('../src/utils');

describe('Checkbox Tests', function () {
  it('should check and uncheck checkboxes', async function () {
    await runTest(async (driver) => {
      // Navigate to the checkboxes page
      await driver.get('https://the-internet.herokuapp.com/checkboxes');
      await driver.sleep(5000);

      // Check the first checkbox
      const checkbox1 = await driver.findElement({ xpath: '//form[@id="checkboxes"]//input[1]' });
      await checkbox1.click();

      // Uncheck the second checkbox
      const checkbox2 = await driver.findElement({ xpath: '//form[@id="checkboxes"]//input[2]' });
      await checkbox2.click();

      // Assert that the first checkbox is checked
      assert.strictEqual(await checkbox1.isSelected(), true, 'Checkbox 1 is not checked');

      // Assert that the second checkbox is unchecked
      assert.strictEqual(await checkbox2.isSelected(), false, 'Checkbox 2 is not unchecked');

      // Pause for a moment to visually inspect the changes (optional)
      await driver.sleep(2000);
    });
  });
});
