import { test, expect } from '@playwright/test';

/**
 * Full document navigation to /projects (e.g. from a blank tab / address bar)
 * must return the SPA shell and render the projects page — not an HTTP 404.
 */
test('direct navigation to /projects renders works page', async ({ page }) => {
  const res = await page.goto('/projects', { waitUntil: 'networkidle' });
  expect(res?.status(), 'HTTP status should be 200').toBe(200);
  await expect(page).toHaveURL(/\/projects\/?$/);
  await expect(page.locator('#work')).toBeVisible();
});

test('deep link to a case study slug still loads SPA', async ({ page }) => {
  const res = await page.goto('/projects/nimfa', { waitUntil: 'networkidle' });
  expect(res?.status(), 'HTTP status should be 200').toBe(200);
  await expect(page.getByRole('heading', { level: 1, name: /Nimfa/i })).toBeVisible();
});
