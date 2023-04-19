import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Solid Start');
});

test('counter', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const counterButton = page.getByRole('button', { name: /Clicks:/ });
  await counterButton.click();
  await expect(counterButton).toHaveText('Clicks: 1');

  await counterButton.click();
  await expect(counterButton).toHaveText('Clicks: 2');
});
