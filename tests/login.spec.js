const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('login page', () => {
  test('contains forms and shows reset form when link clicked', async ({ page }) => {
    const filePath = 'file://' + path.resolve(__dirname, '../login.html');
    await page.goto(filePath);

    await expect(page.locator('#login-form')).toHaveCount(1);
    await expect(page.locator('#register-form')).toHaveCount(1);
    await expect(page.locator('#reset-form')).toHaveCount(1);
    await expect(page.locator('#newpass-form')).toHaveCount(1);

    // reset form should be hidden initially
    await expect(page.locator('#reset-form')).toBeHidden();

    await page.locator('#forgot-link').click();
    await expect(page.locator('#reset-form')).toBeVisible();
  });
});
