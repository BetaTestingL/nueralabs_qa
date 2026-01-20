import { test, expect } from "@playwright/test";

test("user can log in", async ({ page }) => {
  await page.goto("https://example.com/login");

  // ❌ Intentionally fragile selector (will likely break)
  await page.fill("#email-input", "test@example.com");
  await page.fill("#password-input", "password123");

  await page.click("button.login-btn");

  await expect(page).toHaveURL(/dashboard/);
});
