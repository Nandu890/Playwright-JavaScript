import { test, expect } from '@playwright/test';

test("practice code for login", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.setViewportSize({ width: 1920, height: 1040 });

    // Locate the username and password input fields and fill them with valid credentials
    const usernameInput = page.getByPlaceholder('Username');
    const passwordInput = page.getByPlaceholder('Password');

    await usernameInput.fill('standard_user');
    await passwordInput.fill('secret_sauce');

    // Locate the Login button and click on it
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();

    // Add assertions to verify successful login (e.g., check for the expected dashboard page)
    const dashboardText = page.locator('.title');
    await expect(dashboardText).toHaveText('Products');
});