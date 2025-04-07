import { test, expect } from '@playwright/test';

test('Demoblaze homepage test', async ({ page }) => {
  try {
    // Go to the Demoblaze homepage
    await page.goto('https://www.demoblaze.com/index.html');

    // Check if the Demoblaze logo is visible
    const logo = page.locator('a.navbar-brand');
    await expect(logo).toBeVisible();

    // Check if the "Home" link is visible and clickable
    const homeLink = page.locator('a.nav-link:has-text("Home")');
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toBeEnabled();

    // Click the "Home" link
    await homeLink.click();

    // Verify that the homepage is opened
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  } catch (error) {
    console.error('Test failed:', error);
    throw error;
  }
});