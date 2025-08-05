import { test, expect } from '@playwright/test';

test('Bài 1 - Register Page - Điền thông tin cơ bản', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Mở bài học 1
  await page.locator('a[href="01-xpath-register-page.html"]').click();

  // Điền các field cơ bản
  await page.locator('#username').fill('playwright_Mai');
  await page.locator('#email').fill('Mai@playwright.com');

  // Gender 
  await page.locator('#female').check();

  // Hobbies 
  await page.locator('#reading').check();
  await page.locator('#cooking').check();

  // Interests
  await page.locator('#interests').selectOption(['technology', 'music']);

  // Country
  await page.locator('#country').selectOption('australia');

  // Date of Birth
  await page.locator('#dob').fill('2000-09-16');

  // Submit form
  await page.locator('button[type="submit"]').click();

});
