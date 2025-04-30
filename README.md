🧪 Testes Automatizados com Playwright
Este repositório contém testes automatizados end-to-end desenvolvidos com Playwright para validar funcionalidades críticas de uma aplicação de reservas de viagens, construída com React e TypeScript. O objetivo principal do projeto é garantir a estabilidade e a confiabilidade do fluxo de reserva, desde o login do usuário até a finalização do processo.

Os testes foram organizados seguindo o padrão Page Object Model (POM), que promove a reutilização de código, melhor legibilidade e manutenção facilitada. Cada funcionalidade da aplicação (como login, busca e confirmação de reserva) possui um arquivo específico de página, encapsulando os seletores e ações relacionadas.

Este projeto é ideal para praticar automação de testes modernas com foco em qualidade de software, cobrindo testes positivos e negativos, e utilizando práticas recomendadas como:

Separação de responsabilidades entre testes e interações com a interface

Testes robustos e estáveis com espera automática

Estrutura modular e escalável para adição de novos testes

O projeto serve tanto como estudo quanto como base para automatizar aplicações reais que seguem fluxos de navegação em múltiplas páginas.



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
