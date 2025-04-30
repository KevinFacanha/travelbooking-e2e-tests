import { test, expect } from '@playwright/test';
const LoginPage = require('../../pageObjects/LoginPage');
const HomePage = require('../../pageObjects/HomePage');

test('Navegando pela página', async ({ page }) => {
  
  await page.goto('https://kevinfacanha.github.io/TravelBooking/');
  const loginPage = new LoginPage(page);
  const homepage = new HomePage(page);
  await expect(page).toHaveTitle('Vite + React + TS');

    await loginPage.botaoLogo();
    await loginPage.emailValido('user@example.com ', 'password123');
    await loginPage.botaoEntrar();
    

    await homepage.preencherFormularioBusca({
        destino: 'Fortaleza',
        checkin: '2025-05-01',
        checkout: '2025-09-01',
        hospedes: '2'
    });


    await homepage.clicarBuscar();
    
});
