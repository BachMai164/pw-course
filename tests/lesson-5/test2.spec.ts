import { test, expect } from '@playwright/test';

test('Bài 2 - Product Page - Thêm sản phẩm vào giỏ', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Mở bài học 2
  await page.locator('a[href="02-xpath-product-page.html"]').click();

  // Thêm Product 1 - 2 lần
  for (let i = 0; i < 2; i++) {
    await page.locator('button[data-product-id="1"]').click();
  }

  // Thêm Product 2 - 3 lần
  for (let i = 0; i < 3; i++) {
    await page.locator('button[data-product-id="2"]').click();
  }

  // Thêm Product 3 - 1 lần
  await page.locator('button[data-product-id="3"]').click();

});
