# 🧪 Testes Automatizados com Playwright

Este repositório contém testes automatizados end-to-end desenvolvidos com [Playwright](https://playwright.dev/) para validar funcionalidades de um sistema de reservas de viagens.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)
- JavaScript (ES6+)
- Page Object Model (POM)

## ⚙️ Instalação
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

# Instale as dependências
npm install

🧪 Executando os testes
Todos os testes
npx playwright test

Teste específico
npx playwright test tests/reserva/reservaCompleta.spec.js

📸 Relatório dos testes
Após a execução dos testes, um relatório pode ser gerado com:
npx playwright show-report

✅ Funcionalidades testadas
Login válido e inválido
Busca de hotéis
Reserva completa com preenchimento de formulário
