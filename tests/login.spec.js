import { test, expect } from "@playwright/test";

test("auto-heal demo", async ({ page }) => {
  await page.goto("https://playwright.dev");

  // ❌ outdated selector
  await page.click("a.get-started");

  // ✅ real element exists with text "Get started"
  await expect(page).toHaveURL(/docs/);
});
