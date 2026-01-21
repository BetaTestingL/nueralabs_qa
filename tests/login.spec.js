import { test, expect } from "@playwright/test";

test("auto-heal selector demo", async ({ page }) => {
  await page.goto("https://playwright.dev");

  // ❌ force strict failure
  await page.locator("a.get-started").click({ timeout: 2000 });

  await expect(page).toHaveURL(/docs/);
});
