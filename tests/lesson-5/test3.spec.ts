import { test, expect } from '@playwright/test';

test('Todo list: add 100 items', async ({ page }) => {
    // Mở bài học 3
  await page.goto('https://material.playwrightvn.com');
  await page.locator('a[href="03-xpath-todo-list.html"]').click();

  // Điền 100 Todo
  for (let i = 1; i <= 100; i++) {
    await page.locator('#new-task').fill(`Todo ${i}`);
    await page.locator('#add-task').click();
  }

  const tasks = await page.locator('#task-list li');

  // Xóa todo lẻ -> chưa làm dc
});
