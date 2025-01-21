import { test, expect } from '@playwright/test';

test("dropdown", async ({ page }) => {
    // Naviguer vers la page
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    
    // Sélectionner l'option "Option 1" et vérifier la valeur
    await page.locator('#dropdown').selectOption({ label: 'Option 1' });
    await expect(page.locator('#dropdown')).toHaveValue('1');
    
    // Sélectionner l'option "Option 2" et vérifier la valeur
    await page.locator('#dropdown').selectOption({ label: 'Option 2' });
    await expect(page.locator('#dropdown')).toHaveValue('2');
    
    // Mettre le script en pause
    await page.pause();
});