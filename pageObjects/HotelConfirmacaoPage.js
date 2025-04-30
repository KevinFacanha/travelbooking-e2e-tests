class HotelConfirmacaoPage {
    constructor(page) {
        this.page = page;
    }

    async botaoReserva() {
        const reservaBotao = await this.page.locator('div').filter({ hasText: /^R\$ 850Reservar$/ }).getByRole('button');
        await reservaBotao.click();
    }

    async preencherFormulario() {
        await this.page.locator('input[name="checkIn"]').fill('2025-04-30');
        await this.page.locator('input[name="checkOut"]').fill('2025-05-05');
        await this.page.getByRole('spinbutton').fill('2'); // Número de hóspedes
    
        await this.page.locator('input[placeholder="Nome completo"]').fill('Kevin Ribeiro');
        await this.page.locator('input[placeholder="Email"]').fill('kevin@example.com');
        await this.page.locator('input[placeholder="Número do cartão"]').fill('4111111111111111');
        await this.page.locator('input[placeholder="MM/AA"]').fill('12/29');
        await this.page.locator('input[placeholder="CVV"]').fill('123');
    }

    async confirmarReserva() {
        await this.page.getByRole('button', { name: 'Confirmar Reserva' }).click();
    }

    async botaoVoltar(){
        const voltarPaginaInicial = await this.page.getByRole('button', { name: 'Voltar para a página inicial' })
        await voltarPaginaInicial.click();
    }
}

module.exports = HotelConfirmacaoPage;