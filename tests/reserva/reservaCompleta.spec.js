import { test, expect } from '@playwright/test';
const LoginPage = require('../../pageObjects/LoginPage');
const HotelConfirmacaoPage = require('../../pageObjects/HotelConfirmacaoPage');


test('Reserva de passagem', async ({ page }) => {
  
  await page.goto('https://kevinfacanha.github.io/TravelBooking/');
  const loginPage = new LoginPage(page);
  const hotelconfirmacaopage = new HotelConfirmacaoPage(page);
  await expect(page).toHaveTitle('Vite + React + TS');

    await loginPage.botaoLogo();
    await loginPage.emailValido('user@example.com ', 'password123');
    await loginPage.botaoEntrar();
    

    await hotelconfirmacaopage.botaoReserva();
    
    await hotelconfirmacaopage.preencherFormulario();
    await hotelconfirmacaopage.confirmarReserva();

    await hotelconfirmacaopage.botaoVoltar();

    
  
});