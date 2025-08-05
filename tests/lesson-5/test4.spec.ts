import { test, expect } from '@playwright/test';

test('Bài 4 - Personal Notes với dữ liệu mẫu', async ({ page }) => {
  // Chưa crawl dc data từ báo -> hard code notes (title và content)
  // Mở bài 4
  await page.goto('https://material.playwrightvn.com/');
  await page.locator('a[href="04-xpath-personal-notes.html"]').click();

  // Mảng 10 note với tiêu đề theo bài học, content ngắn gọn -> hard code
  const notes = [
    { title: 'Bài học 1: Register Page (có đủ các element)', content: 'Nội dung bài 1' },
    { title: 'Bài học 2: Product page', content: 'Nội dung bài 2' },
    { title: 'Bài học 3: Todo page', content: 'Nội dung bài 3' },
    { title: 'Bài học 4: Personal notes', content: 'Nội dung bài 4' },
    { title: 'Bài học 5: Puzzle drag and drop game', content: 'Nội dung bài 5' },
    { title: 'Bài học 6: Lý thuyết axe methods', content: 'Nội dung bài 6' },
    { title: 'Bài học 7: ancestor-or-self', content: 'Nội dung bài 7' },
    { title: 'Bài học 8: descendant-or-self', content: 'Nội dung bài 8' },
    { title: 'Bài học 9: following-sibling', content: 'Nội dung bài 9' },
    { title: 'Bài học 10: preceding-sibling', content: 'Nội dung bài 10' },
  ];

  //  Thêm 10 note
  for (const note of notes) {
    await page.fill('#note-title', note.title);
    await page.fill('#note-content', note.content);
    await page.click('#add-note');
    await page.waitForTimeout(100); // đợi UI cập nhật
  }

  // Kiểm tra tổng số note là 10
  await expect(page.locator('#notes-list li')).toHaveCount(10);

  // Thực hiện search theo tiêu đề note đầu tiên
  await page.fill('#search', notes[0].title);

  // Kiểm tra chỉ còn 1 note hiển thị với tiêu đề đã search
  const visibleNotes = page.locator('#notes-list li');
  await expect(visibleNotes).toHaveCount(1);
  await expect(visibleNotes.locator('strong')).toHaveText(notes[0].title);
});
