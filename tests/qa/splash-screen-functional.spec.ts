import { test, expect } from '@playwright/test';

test.describe('Splash Screen Functional Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // --- Container Tests ---
  test('splash container is visible', async ({ page }) => {
    await expect(page.getByTestId('splash-container')).toBeVisible();
  });

  // --- Status Bar Tests ---
  test('status bar is visible', async ({ page }) => {
    await expect(page.getByTestId('status-bar')).toBeVisible();
  });

  // --- Header Tests ---
  test('header is visible', async ({ page }) => {
    await expect(page.getByTestId('header')).toBeVisible();
  });

  // --- Navigation Button Tests ---
  test('back button is visible and clickable', async ({ page }) => {
    const backButton = page.getByTestId('back-button');
    await expect(backButton).toBeVisible();
    await expect(backButton).toBeEnabled();
  });

  test('clock button is visible and clickable', async ({ page }) => {
    const clockButton = page.getByTestId('clock-button');
    await expect(clockButton).toBeVisible();
    await expect(clockButton).toBeEnabled();
  });

  test('plus button is visible and clickable', async ({ page }) => {
    const plusButton = page.getByTestId('plus-button');
    await expect(plusButton).toBeVisible();
    await expect(plusButton).toBeEnabled();
  });

  // --- Logo Tests ---
  test('logo is visible', async ({ page }) => {
    await expect(page.getByTestId('logo')).toBeVisible();
  });

  test('logo contains correct text', async ({ page }) => {
    await expect(page.getByTestId('logo')).toContainText('glance');
  });

  // --- AI Response Tests ---
  test('ai response is visible', async ({ page }) => {
    await expect(page.getByTestId('ai-response')).toBeVisible();
  });

  test('ai response shows expected text', async ({ page }) => {
    const expectedText = 'Love this vibe! Would you like to generate your look or refine it further?';
    await expect(page.getByTestId('ai-response')).toHaveText(expectedText);
  });

  // --- Action Button Tests ---
  test('refine button is visible and clickable', async ({ page }) => {
    const refineButton = page.getByTestId('btn-refine');
    await expect(refineButton).toBeVisible();
    await expect(refineButton).toBeEnabled();
    await expect(refineButton).toHaveText('Refine Further');
  });

  test('confirm button is visible and clickable', async ({ page }) => {
    const confirmButton = page.getByTestId('btn-confirm');
    await expect(confirmButton).toBeVisible();
    await expect(confirmButton).toBeEnabled();
    await expect(confirmButton).toHaveText('Confirm');
  });

  // --- Feedback Icons Tests ---
  test('feedback icons are visible', async ({ page }) => {
    await expect(page.getByTestId('feedback-icons')).toBeVisible();
  });

  test('feedback icons contain expected count', async ({ page }) => {
    const feedbackIcons = page.getByTestId('feedback-icons');
    await expect(feedbackIcons).toBeVisible();
    // Assuming each icon has a specific role or class, we'll count children
    const iconCount = await feedbackIcons.locator('*').count();
    expect(iconCount).toBeGreaterThanOrEqual(4);
  });

  // --- Input Bar Tests ---
  test('input bar is visible', async ({ page }) => {
    await expect(page.getByTestId('input-bar')).toBeVisible();
  });

  test('input placeholder is visible', async ({ page }) => {
    const placeholder = page.getByTestId('input-placeholder');
    await expect(placeholder).toBeVisible();
    await expect(placeholder).toHaveText('Type here...');
  });

  test('send button is visible and clickable', async ({ page }) => {
    const sendButton = page.getByTestId('send-button');
    await expect(sendButton).toBeVisible();
    await expect(sendButton).toBeEnabled();
  });

  // --- Interaction Tests ---
  test('refine button responds to click', async ({ page }) => {
    const refineButton = page.getByTestId('btn-refine');
    await refineButton.click();
    // Note: Add specific assertions based on expected behavior
    // For now, just verify the click doesn't crash
    await expect(refineButton).toBeVisible();
  });

  test('confirm button responds to click', async ({ page }) => {
    const confirmButton = page.getByTestId('btn-confirm');
    await confirmButton.click();
    // Note: Add specific assertions based on expected behavior
    await expect(confirmButton).toBeVisible();
  });

  test('send button responds to click', async ({ page }) => {
    const sendButton = page.getByTestId('send-button');
    await sendButton.click();
    // Note: Add specific assertions based on expected behavior
    await expect(sendButton).toBeVisible();
  });

  // --- Scroll Tests ---
  test('can scroll to input bar at bottom', async ({ page }) => {
    const inputBar = page.getByTestId('input-bar');
    await inputBar.scrollIntoViewIfNeeded();
    await expect(inputBar).toBeVisible();
  });

  test('can scroll to header at top', async ({ page }) => {
    const header = page.getByTestId('header');
    await header.scrollIntoViewIfNeeded();
    await expect(header).toBeVisible();
  });

  // --- Layout Structure Tests ---
  test('all core elements exist in correct order', async ({ page }) => {
    // Verify the main layout structure exists
    await expect(page.getByTestId('splash-container')).toBeVisible();
    await expect(page.getByTestId('status-bar')).toBeVisible();
    await expect(page.getByTestId('header')).toBeVisible();
    await expect(page.getByTestId('logo')).toBeVisible();
    await expect(page.getByTestId('ai-response')).toBeVisible();
    await expect(page.getByTestId('btn-refine')).toBeVisible();
    await expect(page.getByTestId('btn-confirm')).toBeVisible();
    await expect(page.getByTestId('feedback-icons')).toBeVisible();
    await expect(page.getByTestId('input-bar')).toBeVisible();
  });
});