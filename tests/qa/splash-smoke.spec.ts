import { test, expect } from '@playwright/test';

test.describe('Splash Screen Smoke', () => {
  test('page loads and splash container is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('splash-container')).toBeVisible();
  });

  test('AI response text is displayed', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('ai-response')).toBeVisible();
  });

  test('input bar is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('input-bar')).toBeVisible();
  });
});
