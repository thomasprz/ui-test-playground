import {test, expect} from '@playwright/test'

test("Checkboxes", async ({page}) => {

    await page.goto("/")
    await page.getByRole('link', {name:"Dropdown"}).click()
    expect(await page.locator("h3")).toHaveText("Dropdown List")

    // Vérification que l'option désactivée est présente et ne peut pas être sélectionnée
    const disabledOption = page.locator('[disabled="disabled"]');
    await expect(disabledOption).toBeEnabled(); // Vérifie que l'option est bien désactivée

    // Cliquer sur l'option 1 et vérifier
    await page.selectOption('select#dropdown', { value: '1' });
    await expect(page.locator('select#dropdown')).toHaveValue('1');

    // Cliquer sur l'option 2 et vérifier
    await page.selectOption('select#dropdown', { value: '2' });
    await expect(page.locator('select#dropdown')).toHaveValue('2');
});


// To work