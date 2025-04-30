import { test, expect } from '@playwright/test';
const LoginPage = require('../../pageObjects/LoginPage');

test('Login Valido', async ({ page }) => {
  
  await page.goto('https://kevinfacanha.github.io/TravelBooking/');
  const loginPage = new LoginPage(page);
  await expect(page).toHaveTitle('Vite + React + TS');

    await loginPage.botaoLogo();
    await loginPage.emailValido('user@example.com ', 'password123');
    await loginPage.botaoEntrar();
    
  
});
