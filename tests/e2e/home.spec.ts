import { test, expect } from '@playwright/test';

test('homepage displays editorial hero and master artisans', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Discover Things Made by Hand/i);
  await expect(page.locator('h1')).toContainText('Discover things made by hand');
  await expect(page.locator('text=Featured Master Artisans')).toBeVisible();
});
