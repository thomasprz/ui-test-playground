import { test, expect } from '@playwright/test';

test('Broken Images', async ({ page }) => {
  await page.goto("/");
  await page.getByRole('link', { name: "Broken Images" }).click();
  await page.waitForLoadState('networkidle');
  
  const images = page.locator("img");
  const allImages = await images.all()

  for (const img of allImages) {
    const imgSrc = await img.getAttribute("src");
    //@ts-ignore
      const res = await page.request.get("https://the-internet.herokuapp.com/" + imgSrc);
      await expect.soft(res.status(), `Failed to load: ${imgSrc}`).toBe(200);
  }
});

//** <img src="https://example.com/image.jpg">   ->    Alors la valeur de src serait "https://example.com/image.jpg". 
