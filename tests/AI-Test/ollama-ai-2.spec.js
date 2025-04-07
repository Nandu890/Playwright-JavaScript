import { test, expect } from '@playwright/test';
import axios from 'axios';

test('Use AI-generated username in Playwright', async ({ page }) => {
  await page.goto('https://example.com');

  // Request AI-generated username
  const response = await axios.post('http://127.0.0.1:11434/api/generate', {
    model: "deepseek-r1:1.5b",
    prompt: "Generate a random username",
    stream: false
  });

  const aiUsername = response.data.response.trim();
  console.log("Generated Username:", aiUsername);

  // Fill the AI-generated text into a form input
  await page.fill('#username', aiUsername);

  // Submit the form
  await page.click('#submit-button');

  // Verify the username appears on the next page
  await expect(page.locator('#profile-username')).toContainText(aiUsername);
});
