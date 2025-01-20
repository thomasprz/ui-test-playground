import { test, expect } from '@playwright/test';

test('Working with Checkboxes', async ({ page }) => {

    await page.goto('/')
    await page.getByRole('link', {name: "Checkboxes"}).click()
    
    //Assertions
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy()
    expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeTruthy()

    //Check checkbox 1 + Un-check checkbox 2
    await page.check('input[type=checkbox]:nth-child(1)')
    await page.uncheck('input[type=checkbox]:nth-child(3)')

    //Assert checkbox1 is now checked + Assert checkbox2 is now un-checked

    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeTruthy()
    expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeFalsy()
})
