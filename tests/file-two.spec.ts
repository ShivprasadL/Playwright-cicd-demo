import { test, expect } from '@playwright/test';

test('File 2 - Test A', async ({ page }, testInfo) => {
  console.log(`>>> [Worker ${testInfo.workerIndex}] STARTING: File 2 - Test A`);
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(1000);
  console.log(`>>> [Worker ${testInfo.workerIndex}] FINISHED: File 2 - Test A`);
  await expect(page).toHaveTitle(/Playwright/);
});

test('File 2 - Test B', async ({ page }, testInfo) => {
  console.log(`>>> [Worker ${testInfo.workerIndex}] STARTING: File 2 - Test B`);
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(1000);
  console.log(`>>> [Worker ${testInfo.workerIndex}] FINISHED: File 2 - Test B`);
  await expect(page).toHaveTitle(/Playwright/);
});