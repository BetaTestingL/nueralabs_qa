import { test, expect } from "@playwright/test";

test("auto-heal selector demo", async ({ page }) => {
  await page.goto("https://example.com");

  // ❌ Intentionally wrong selector
  await page.click("a.login-button");

  // Page actually has: a[href]
  await expect(page).toHaveTitle(/Example Domain/);
});
