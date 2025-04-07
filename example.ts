import { chromium, Page } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  // Navigate to the Sauce Demo application
  await page.goto('https://www.saucedemo.com/');

  // Enter username and password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click on the Login button
  const loginButton = await page.$('#login-button');
  await loginButton?.click();
 await page.pause()
  // Wait for the products list to load
  const productsList = await page.$$eval('.inventory_item', (items) => {
    return items.map((item) => {
      const title = item.querySelector('.inventory_item_name')?.textContent;
      return { title };
    });
  });

  // Find the product with the text "Sauce Labs Backpack"
  const backpackOption = productsList.find((product) => product.title === 'Sauce Labs Backpack');

  if (backpackOption) {
    // Click on the product
    await page.waitForTimeout(2000);
    await page.click(`text=${backpackOption.title}`);
    console.log(`${backpackOption} found`)
  } else {
    console.log('Unable to find the "Sauce Labs Backpack" product.');
  }

  await browser.close();
}

main().catch((error) => console.error(error));