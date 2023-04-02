import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SolidStart/);
});

test('counter', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click the get started link.
  await page.getByRole('button', { name: /Clicks:/ }).click();
  await expect(page.getByRole('button')).toHaveText('Clicks: 1');

  await page.getByRole('button', { name: /Clicks:/ }).click();
  await expect(page.getByRole('button')).toHaveText('Clicks: 2');
});
