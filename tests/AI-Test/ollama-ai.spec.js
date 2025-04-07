import { test, expect } from '@playwright/test';
import axios from 'axios';

test('Generate AI response with Ollama', async ({ page }) => {
  // Open a test page
  await page.goto('https://example.com');

  // Send a request to Ollama
  const response = await axios.post('http://127.0.0.1:11434/api/generate', {
    model: "mistral",  // Change model if needed
    prompt: "What is Playwright?",
    stream: false
  });

  console.log("AI Response:", response.data.response);

  // Example: Verify AI response contains expected text
  expect(response.data.response).toContain("Playwright");
});
