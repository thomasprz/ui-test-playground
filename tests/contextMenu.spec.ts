import {test, expect} from '@playwright/test'

test("Context Menu", async ({page}) => {
    await page.goto('/')
    await page.getByRole('link', {name:"Context Menu"}).click()

    page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert');   
    expect(dialog.message()).toContain('You selected a context menu');
    await dialog.accept();
    });

    // locating and right clicking the hot-spot
    await page.locator('#hot-spot').click({button : 'right'});

})

//l'écouteur d'événements page.on('dialog') est asynchrone et s'exécute en parallèle avec les actions que vous effectuez sur la page.
//function displayMessage() {window.alert('You selected a context menu')}
//Il existe d'autres boites de dialogue , // window.confirm("Do you confirm?"); expect(dialog.type()).toContain('confirm');
