import { test, expect } from '@playwright/test';

test('Basic Auth', async ({ page }) => {
  await page.goto("/")
  await page.getByRole('link', { name: "Basic Auth" }).click(); // <a> = "link"
  await page.getByRole('button', { name: "Add Element" }).click();
  
  const deleteButton = page.getByRole('button', { name: "Delete" })
  await expect(deleteButton).toBeVisible();

  await deleteButton.click()
  await expect(deleteButton).toBeHidden()
});