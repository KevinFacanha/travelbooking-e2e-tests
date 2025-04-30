class HomePage {
    constructor(page) {
        this.page = page;
        this.destinoInput = page.getByPlaceholder('Para onde você vai?');
        this.checkinInput = page.locator('div').filter({ hasText: /^Check-in$/ }).getByRole('textbox');
        this.checkoutInput = page.locator('div').filter({ hasText: /^Check-out$/ }).getByRole('textbox');
        this.hospedesInput = page.getByRole('spinbutton'); // corrigido aqui
        this.botaoBuscar = page.getByRole('button', { name: 'Buscar' });
    }

    async preencherFormularioBusca({ destino, checkin, checkout, hospedes }) {
        await this.destinoInput.waitFor({ state: 'visible' });
        await this.destinoInput.fill(destino);

        await this.checkinInput.waitFor({ state: 'visible' });
        await this.checkinInput.fill(checkin);

        await this.checkoutInput.waitFor({ state: 'visible' });
        await this.checkoutInput.fill(checkout);

        await this.hospedesInput.waitFor({ state: 'visible' });
        await this.hospedesInput.click();
        await this.hospedesInput.press('Control+A');
        await this.hospedesInput.press('Backspace');
        await this.hospedesInput.type(hospedes.toString());
    }

    async clicarBuscar() {
        const botaoBuscar = await this.page.getByRole('button', { name: 'Buscar' });
        await botaoBuscar.click();
    }
}

module.exports = HomePage;
    