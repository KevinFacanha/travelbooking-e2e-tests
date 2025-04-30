// @ts-check
import { test, expect } from '@playwright/test';
const LoginPage = require('../../pageObjects/LoginPage');

test('Login invalido', async ({ page }) => {
  
  await page.goto('https://kevinfacanha.github.io/TravelBooking/');
  const loginPage = new LoginPage(page);
  await expect(page).toHaveTitle('Vite + React + TS');

  await loginPage.botaoLogo();
  await loginPage.emailInvalido('facanha1212@gmail.com', 'dazh2020');
  await loginPage.botaoEntrar();
  
});

