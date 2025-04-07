import { test, expect } from '@playwright/test';

test('Trello homepage test', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

  await  page.goto("https://www.saucedemo.com/")
  const pageTitle = await  page.title();
  console.log("page title is: "+ pageTitle);
  await  expect(page).toHaveTitle('Swag Labs') ;

})