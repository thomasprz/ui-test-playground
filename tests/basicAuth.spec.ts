import { test, expect } from '@playwright/test';

test('Basic Auth Demo with popup', async ({ page, browser }) => {
  // Création du contexte avec les informations d'identification HTTP, //
  const context = await browser.newContext({  
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },
  });

  // Création d'une nouvelle page dans le contexte authentifié
  const authPage = await context.newPage();

  // Navigation vers la page d'accueil
  await authPage.goto("/");

  // Cliquer sur le lien "Basic Auth"
  await authPage.getByRole('link', { name: "Basic Auth" }).click();

  // Vérification de l'authentification
  await expect(authPage.locator("h3")).toHaveText("Basic Auth");
  await expect(authPage.locator(".example p")).toHaveText("Congratulations! You must have the proper credentials.");
});

//Context est un conteneur d'onglets (ou pages)
//Context.newPage() permet d'ouvrir un nouvel onglet (ou page) dans ce contexte
//Browser Context = incognito mode

//Explication
//const context1 = await browser.newContext(); // Crée un premier contexte isolé
//const page1 = await context1.newPage(); // Crée une première page dans ce contexte
//const context2 = await browser.newContext(); // Crée un deuxième contexte isolé
//const page2 = await context2.newPage(); // Crée une première page dans ce deuxième contexte