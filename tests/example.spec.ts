import { test, expect } from '@playwright/test';

// test('has title', async ({ page }, testInfo) => {
//   console.log(`[Worker ${testInfo.workerIndex}] Running: has title`);
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });


test('test environment switching', async ({ page }, testInfo) => {
  // This will automatically use whatever baseURL was loaded from your .env file!
  await page.goto('/'); 

  console.log(`[Worker ${testInfo.workerIndex}] Successfully loaded URL: ${page.url()}`);
  await expect(page).toHaveURL(/.*/);
});

// test('get started link', async ({ page }, testInfo) => {
//   console.log(`[Worker ${testInfo.workerIndex}] Running: get started link`);
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });